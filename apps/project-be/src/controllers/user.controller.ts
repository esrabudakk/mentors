
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
import {UserService} from "../services/user.service";
export class UserController {
  constructor(
   @service(UserService)
   public userService : UserService
  ) {}

  @post('/users')
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
    return this.userService.createUser(token);
  }

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

  @patch('/users/my-profile')
  @response(200, {
    description: 'Array of Users model instances',
    content: {
      'application/json': {
      },
    },
  })
  async updateMyProfile(
    @param.path.number('id') id:number,
    @requestBody() newUserData: Pick<Users, 'firstName'| 'lastName'| 'phone' | 'aboutMessage'>
  ) {
    await this.userService.updateMyProfile(id, newUserData);
  }
}
