// Uncomment these imports to begin using these cool features!

import { inject, service } from "@loopback/core";
import { ConsultantDTO, ConsultantsService } from "../services/consultants.service";
import { post, response, getModelSchemaRef, requestBody, param, patch } from "@loopback/rest";
import { Categories, Consultants, Users } from "../models";
import { UserServiceBindings } from "../keys";

// import {inject} from '@loopback/core';


export class ConsultantsController {
  constructor(
    @service(ConsultantsService)
    public consultantsService : ConsultantsService,
  ) {}


  @post('/consultants')
  @response(200, {
    description: 'Consultants model instance',
    content: {'application/json': {schema: getModelSchemaRef(Categories)}},
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

}
