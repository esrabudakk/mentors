import {repository} from "@loopback/repository";
import {UsersRepository} from "../repositories";
import {jwtDecode} from "jwt-decode";

export class UserService {
    constructor(
        @repository(UsersRepository)
        public usersRepository: UsersRepository
    ) {
    }

    async createUser(token: string){
        const userData = jwtDecode(token);

        console.log(userData);

    }


}