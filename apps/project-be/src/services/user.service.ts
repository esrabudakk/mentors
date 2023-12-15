import {repository} from "@loopback/repository";
import {UsersRepository} from "../repositories";
import {jwtDecode} from "jwt-decode";
import {ModelStatus} from "../models/models-utils";

// test
interface UserData {
    given_name : string,
    family_name: string,
    email: string,
    sub: string
}

export class UserService {
    constructor(
        @repository(UsersRepository)
        public usersRepository: UsersRepository
    ) {
    }

    async createUser(newToken: {token:string}){
        const userData = jwtDecode(newToken.token) as UserData;

        const newUser = await  this.usersRepository.create({
            firstName: userData.given_name,
            lastName:userData.family_name,
            username: userData.email,
            email:userData.email,
            keycloak_uid:userData.sub,
            status: ModelStatus.ACTIVE,
        })

        return newUser;
    }

    async getUser(){
      return  this.usersRepository.find()
    }

}