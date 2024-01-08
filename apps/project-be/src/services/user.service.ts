import {repository} from "@loopback/repository";
import { UserRolesRepository, UsersRepository} from "../repositories";
import {jwtDecode} from "jwt-decode";
import {ModelStatus} from "../models/models-utils";
import {Binding, BINDING_METADATA_KEY, inject, service} from '@loopback/core';
import { RolesService } from "./roles.service";
import {Users} from "../models"
import {UserServiceBindings} from '../keys';

export interface UserData {
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


    async getUsers(){
      return this.usersRepository.find()
    }

    async getUserById(userId:number){
        return this.usersRepository.findById(userId)
    }

    async updateMyProfile( newUserData:Pick<Users, 'firstName'| 'lastName'| 'phone' | 'aboutMessage' | 'imageUrl'> ){
        if (!this.user)
            throw new Error('User Not found')
        await this.usersRepository.updateById(this.user.id as number, {
            ...newUserData
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