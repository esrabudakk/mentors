
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
  async create(
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
  async find(
  ): Promise<Users[]> {
    return this.userService.getUser();
  }
  //
  // @patch('/users/{id}')
  // @response(204, {
  //   description: 'Users PATCH success',
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Users, {partial: true}),
  //       },
  //     },
  //   })
  //   users: Users,
  // ): Promise<void> {
  //   await this.usersRepository.updateById(id, users);
  // }

}
