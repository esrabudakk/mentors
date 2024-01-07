// Uncomment these imports to begin using these cool features!

import { service } from "@loopback/core";
import {Advertisements, Categories} from "../models";
import { CategoriesService } from "../services";
import {get, param, response} from "@loopback/rest";
import {authorize} from "@loopback/authorization";
import {PermissionKeys} from "../services/enums";

// import {inject} from '@loopback/core';


export class CategoriesController {
  constructor(
    @service(CategoriesService)
    public categoriesService: CategoriesService
  ) {}

  @get('/public/categories')
  @response(200, {
    description: 'Array of Users model instances',
    content: {
      'application/json': {
        schema: {
        },
      },
    },
  })
  async findCategories( 
  ): Promise<Categories[]> {
    return this.categoriesService.getCategories();
  }

  @authorize({allowedRoles: [PermissionKeys.VIEW_ADVERTISEMENT]})
  @get('/categories/{id}/advertisements')
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
      @param.path.number('id') id:number
  ): Promise<Advertisements[]> {
    return this.categoriesService.getAdvertisementsByCategoryId(id);
  }
}


