// Uncomment these imports to begin using these cool features!

import { service } from "@loopback/core";
import { Categories } from "../models";
import { CategoriesService } from "../services";
import { get, response } from "@loopback/rest";

// import {inject} from '@loopback/core';


export class CategoriesController {
  constructor(
    @service(CategoriesService)
    public categoriesService: CategoriesService
  ) {}

  @get('/categories')
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
}


