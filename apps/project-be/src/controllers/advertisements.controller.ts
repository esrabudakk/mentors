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

  @authorize({allowedRoles: [PermissionKeys.CREATE_ADVERTISEMENT]})
  @post('/advertisements')
  @response(200, {
    description: 'Users model instance',
    content: {'application/json': {schema: getModelSchemaRef(Advertisements)}},
  })
  async createUser(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Advertisements, {partial: true})
          },
        },
      })
      newAdvertisements: Advertisements
  ){
    return this.advertisementService.createAdvertisement(newAdvertisements);
  }
  @authorize({allowedRoles: [PermissionKeys.VIEW_ADVERTISEMENT]})
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
  @authorize({allowedRoles: [PermissionKeys.VIEW_ADVERTISEMENT]})
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
  @authorize({allowedRoles: [PermissionKeys.UPDATE_ADVERTISEMENT]})
  @patch('/advertisements/{id}')
  async updateMyAdvertisement(
      @param.path.number('id') id:number,
      @requestBody() newAdvertisement: Omit<AdvertisementsDTO,'categoryName'>
  ) {
    await this.advertisementService.updateMyAdvertisement(id, newAdvertisement);
  }
@authorize({allowedRoles: [PermissionKeys.DELETE_ADVERTISEMENT]})
  @del('/advertisements/{id}')
  @response(204, {
    description: 'Advertisement DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.advertisementService.deleteByAdvertisementId(id);
  }

  @authorize({allowedRoles: [PermissionKeys.APPROVE_ADVERTISEMENT]})
  @patch('/advertisements/{id}/approval')
  async updateAdvertisementApproved(
      @param.path.number('id') id:number,
      @requestBody()  isApproved: {isApproved: boolean}
  ) {
    await this.advertisementService.updateAdvertisementApproved(id, isApproved.isApproved);
  }


}
