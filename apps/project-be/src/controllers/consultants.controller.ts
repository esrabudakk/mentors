// Uncomment these imports to begin using these cool features!

import { inject, service } from "@loopback/core";
import { ConsultantDTO, ConsultantsService } from "../services/consultants.service";
import { post, response, getModelSchemaRef, requestBody, param, patch } from "@loopback/rest";
import { Categories, Consultants, Users } from "../models";
import { UserServiceBindings } from "../keys";
import {authorize} from "@loopback/authorization";
import {PermissionKeys} from "../services/enums";

// import {inject} from '@loopback/core';


export class ConsultantsController {
  constructor(
    @service(ConsultantsService)
    public consultantsService : ConsultantsService,
  ) {}


  @authorize({allowedRoles: [PermissionKeys.CREATE_CONSULTANT_PROFILE]})
  @post('/consultants')
  @response(200, {
    description: 'Consultants model instance',
    content: {'application/json': {schema: getModelSchemaRef(Consultants)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
        },
      },
    })
    newConsultant: ConsultantDTO
  ): Promise<Consultants> {
    return this.consultantsService.createConsultant(newConsultant);
  }

  @authorize({allowedRoles:[PermissionKeys.UPDATE_CONSULTANT_PROFILE]})
  @patch('/consultants/{id}')
  @response(204, {
    description: 'Consultants PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Consultants, {partial: true}),
        },
      },
    })
    consultants: ConsultantDTO,
  ): Promise<void> {
    await this.consultantsService.updateByConsultantId(id, consultants);
  }

  @authorize({allowedRoles: [PermissionKeys.APPROVE_CONSULTANT]})
  @patch('/consultants/{id}')
  async updateConsultantApproved(
      @param.path.number('id') id:number,
      @requestBody() isApproved: boolean
  ) {
    await this.consultantsService.updateConsultantApproved(id, isApproved);
  }
}
