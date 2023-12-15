// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';


import {del, get, getModelSchemaRef, param, patch, post, requestBody, response} from "@loopback/rest";
import {Advertisements, Users} from "../models";
import {service} from "@loopback/core";
import {AdvertisementsDTO, AdvertisementsService} from "../services";
import { authorize } from "@loopback/authorization";
import { PermissionKeys } from "../services/enums";

export class AdvertisementsController {
  constructor(
      @service(AdvertisementsService)
      public advertisementService : AdvertisementsService
  ) {}

  @post('/advertisements')
  @response(200, {
    description: 'Users model instance',
    content: {'application/json': {schema: getModelSchemaRef(Advertisements)}},
  })
  async createUser(
      @requestBody({
        content: {
          'application/json': {
          },
        },
      })
      newAdvertisements: AdvertisementsDTO
  ){
    return this.advertisementService.createAdvertisement(newAdvertisements);
  }
  
  @get('/advertisements')
  @response(200, {
    description: 'Array of Users model instances',
    content: {
      'application/json': {
        schema: {
        },
      },
    },
  })
  async findAdvertisements(
  ): Promise<Advertisements[]> {
    return this.advertisementService.getAdvertisements();
  }
  
  @get('/advertisements/{id}')
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
  ): Promise<Advertisements> {
    return this.advertisementService.getAdvertisementsById(id);
  }
  
  @patch('/advertisements/{id}')
  async updateMyAdvertisement(
      @param.path.number('id') id:number,
      @requestBody() newAdvertisement: Omit<AdvertisementsDTO,'categoryName'>
  ) {
    await this.advertisementService.updateMyAdvertisement(id, newAdvertisement);
  }

  @del('/advertisements/{id}')
  @response(204, {
    description: 'Advertisement DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.advertisementService.deleteByAdvertisementId(id);
  }

  @patch('/advertisements/{id}')
  async updateAdvertisementApproved(
      @param.path.number('id') id:number,
      @requestBody() isApproved: boolean
  ) {
    await this.advertisementService.updateAdvertisementApproved(id, isApproved);
  }


}
