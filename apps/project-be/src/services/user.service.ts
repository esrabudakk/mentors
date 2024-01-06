import {repository} from "@loopback/repository";
import { UserRolesRepository, UsersRepository} from "../repositories";
import {jwtDecode} from "jwt-decode";
import {ModelStatus} from "../models/models-utils";
import {Binding, BINDING_METADATA_KEY, inject, service} from '@loopback/core';
import { RolesService } from "./roles.service";
import {Users} from "../models"
import {UserServiceBindings} from '../keys';

interface UserData {
    given_name : string,
    family_name: string,
    email: string,
    sub: string
}

export enum RoleNames {
    ADMIN ='ADMIN',
    CLIENT= 'CLIENT',
    CONSULTANT='CONSULTANT'
}

export class UserService {
    constructor(
        @repository(UsersRepository)
        public usersRepository: UsersRepository,
        @repository(UserRolesRepository)
        public userRolesRepository: UserRolesRepository,
        @service(RolesService)
        public rolesService :RolesService,
        @inject(UserServiceBindings.USER) public user:Users,
   
    ) {
    }

    async createUser(newToken: {token:string}){

        const userData = jwtDecode(newToken.token) as UserData;
        
        const foundUser = await this.usersRepository.findOne({where: {keycloak_uid: userData.sub}});
        if(foundUser)   
            return;
        
        const newUser = await  this.usersRepository.create({
            firstName: userData.given_name,
            lastName:userData.family_name,
            username: userData.email,
            email:userData.email,
            keycloak_uid:userData.sub,
            status: ModelStatus.ACTIVE,
        });

        const role = await this.rolesService.getRoleByRoleName(RoleNames.CLIENT);

        if(!role)
            throw new Error('Role not found');

        await this.userRolesRepository.create({
            userId: newUser.id,
            roleId: role.id,
            createdAt: new Date().toISOString(),
        })
        return newUser;
    }

    async getUsers(){
      return this.usersRepository.find()
    }

    async getUserById(userId:number){
        return this.usersRepository.findById(userId)
    }

    async updateMyProfile(userId: number, newUserData:Pick<Users, 'firstName'| 'lastName'| 'phone' | 'aboutMessage'> ){
        await this.usersRepository.updateById(userId, {
            firstName: newUserData.firstName,
            lastName: newUserData.lastName,
            phone: newUserData.phone,
            aboutMessage: newUserData.aboutMessage
        });
    }

    async getMyProfile(){
        const user = await this.usersRepository.findById(this.user.id as number, {
            include: [{relation: 'userRoles',
            scope: {
                include: [{relation: 'roles'}]
            }}]
        });

        return user
    }
    
}