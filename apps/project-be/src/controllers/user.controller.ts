
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  requestBody,
  response,
} from '@loopback/rest';
import {Users} from '../models';
import {service} from "@loopback/core";
import {RoleNames, UserData, UserService} from "../services/user.service";
import {authorize} from "@loopback/authorization";
import {PermissionKeys} from "../services/enums";
import {jwtDecode} from "jwt-decode";
import {ModelStatus} from "../models/models-utils";
import {repository} from "@loopback/repository";
import {UserRolesRepository, UsersRepository} from "../repositories";
import {RolesService} from "../services/roles.service";
export class UserController {
  constructor(
   @service(UserService)
   public userService : UserService,
   @repository(UsersRepository)
   public usersRepository: UsersRepository,
   @repository(UserRolesRepository)
   public userRolesRepository: UserRolesRepository,
   @service(RolesService)
   public rolesService :RolesService,

  ) {}

  @post('/public/users')
  @response(200, {
    description: 'Users model instance',
    content: {'application/json': {schema: getModelSchemaRef(Users)}},
  })
  async createUser(
    @requestBody({
      content: {
        'application/json': {
        },
      },
    })
    token:{token: string}
  ){
    const userData = jwtDecode(token.token) as UserData;

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
@authorize({})
  @get('/users')
  @response(200, {
    description: 'Array of Users model instances',
    content: {
      'application/json': {
        schema: {
        },
      },
    },
  })
  async findUsers(
  ): Promise<Users[]> {
    return this.userService.getUsers();
  }

  @authorize({})
  @get('/users/{id}')
  @response(200, {
    description: 'Array of Users model instances',
    content: {
      'application/json': {
        schema: {
        },
      },
    },
  })
  async findUserById(
    @param.path.number('id') id:number
  ): Promise<Users> {
    return this.userService.getUserById(id);
  }

  @authorize({allowedRoles: [PermissionKeys.VIEW_OWN_PROFILE]})
  @get('/users/my-profile')
  @response(200, {
    description: 'Array of Users model instances',
    content: {
      'application/json': {
        schema: {
        },
      },
    },
  })
  async getMyProfile(
  ): Promise<Users> {
    return this.userService.getMyProfile();
  }
@authorize({allowedRoles: [PermissionKeys.UPDATE_OWN_PROFILE]})
  @patch('/my-profile')
  async updateMyProfile(
    @requestBody() newUserData: Pick<Users, 'firstName'| 'lastName'| 'phone' | 'aboutMessage'>
  ) {
    await this.userService.updateMyProfile(newUserData);
  }
}
