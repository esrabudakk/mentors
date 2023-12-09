import {BindingScope, injectable} from '@loopback/core';
import {repository} from "@loopback/repository";
import {UsersRepository} from "../repositories";
import {Users} from "../models";
import {decodeJwt} from "../jwt";

@injectable({scope: BindingScope.TRANSIENT})
export class AuthenticationService {
    constructor(
    ) {}
    @repository(UsersRepository) usersRepository:UsersRepository

    async getUserProfile(jwt:string) : Promise<Users> {
        const payload = decodeJwt(jwt);

        const user = await this.usersRepository.findOne({
            where: {keycloak_uid: payload.sub}
        });
        if (!user)
            throw new Error('User not found keycloak id' + payload.sub)
        return user;
    }
}
