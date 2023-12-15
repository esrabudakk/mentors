// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';


import {get, getModelSchemaRef, param, patch, post, requestBody, response} from "@loopback/rest";
import {Advertisements, Users} from "../models";
import {service} from "@loopback/core";
import {AdvertisementsService} from "../services";

export class AdvertisementsController {
  constructor(
      // @service(AdvertisementsService)
      // public advertisementService : AdvertisementsService
  ) {}

  // @post('/advertisements')
  // @response(200, {
  //   description: 'Users model instance',
  //   content: {'application/json': {schema: getModelSchemaRef(Advertisements)}},
  // })
  // async createUser(
  //     @requestBody({
  //       content: {
  //         'application/json': {
  //         },
  //       },
  //     })
  //         token:{token: string}
  // ){
  //   return this.advertisementService.createUser(token);
  // }
  //
  // @get('/users')
  // @response(200, {
  //   description: 'Array of Users model instances',
  //   content: {
  //     'application/json': {
  //       schema: {
  //       },
  //     },
  //   },
  // })
  // async findUsers(
  // ): Promise<Users[]> {
  //   return this.userService.getUsers();
  // }
  //
  // @get('/users/{id}')
  // @response(200, {
  //   description: 'Array of Users model instances',
  //   content: {
  //     'application/json': {
  //       schema: {
  //       },
  //     },
  //   },
  // })
  // async findUserById(
  //     @param.path.number('id') id:number
  // ): Promise<Users> {
  //   return this.userService.getUserById(id);
  // }
  //
  // @patch('/users/my-profile')
  // async updateMyProfile(
  //     @param.path.number('id') id:number,
  //     @requestBody() newUserData: Pick<Users, 'firstName'| 'lastName'| 'phone' | 'aboutMessage'>
  // ) {
  //   await this.userService.updateMyProfile(id, newUserData);
  // }
}
