import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { CategoriesRepository } from '../repositories';


@injectable({scope: BindingScope.TRANSIENT})
export class CategoriesService {
  constructor(
    @repository(CategoriesRepository)
    public categoriesRepository: CategoriesRepository,
  ) {}

  async getCategories (){
    const foundCategories = await this.categoriesRepository.find()
    return foundCategories;
  }

}
