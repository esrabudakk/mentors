import {repository} from "@loopback/repository";
import {RolesRepository, UserRolesRepository, UsersRepository} from "../repositories";

export class RolesService {
    constructor(
        @repository(RolesRepository)
        public rolesRepository: RolesRepository
    ) {
    }

    async getRoleByRoleName(userRoleName: string){
        return this.rolesRepository.findOne({where:{roleName: userRoleName}})
    }

}