import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import {AdvertisementsRepository, CategoriesRepository} from '../repositories';


@injectable({scope: BindingScope.TRANSIENT})
export class CategoriesService {
  constructor(
    @repository(CategoriesRepository)
    public categoriesRepository: CategoriesRepository,
    @repository(AdvertisementsRepository)
    public advertisementsRepository: AdvertisementsRepository
  ) {}

  async getCategories (){
    const foundCategories = await this.categoriesRepository.find()
    return foundCategories;
  }

  async getAdvertisementsByCategoryId(id:number){
    return this.advertisementsRepository.find({where: {categoryId: id}})
  }
}
