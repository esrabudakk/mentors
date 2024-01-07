import {injectable, /* inject, */ BindingScope, inject} from '@loopback/core';
import { repository } from '@loopback/repository';
import { AdvertisementsRepository, CategoriesRepository } from '../repositories';
import { UserServiceBindings } from '../keys';
import { Advertisements, Users } from '../models';
import { ModelStatus } from '../models/models-utils';

export interface AdvertisementsDTO extends Pick<Advertisements, 'advertisementTitle'|  'description'| 'currency'| 'price'| 'status'>{
  categoryName: string
}


@injectable({scope: BindingScope.TRANSIENT})
export class AdvertisementsService {
  constructor(
    @repository(AdvertisementsRepository)
    public advertisementsRepository : AdvertisementsRepository,
    @repository(CategoriesRepository)
    public categoriesRepository: CategoriesRepository,
    @inject(UserServiceBindings.USER) public user: Users
  ) {}

  async createAdvertisement(newAdvertisements: Advertisements){
    
    const createdAdvertisements = await this.advertisementsRepository.create({
      ...newAdvertisements,
      userId: this.user.id,
      isApproved: false,
      createdAt: new Date().toISOString(),
      createdBy: this.user.id
    })

    return createdAdvertisements;
  }

  async getAdvertisements (){
    const foundAdvertisements = await this.advertisementsRepository.find()

    return foundAdvertisements;
  }

  async getAdvertisementsById(advertisementId: number){
    const foundAdvertisement = await this.advertisementsRepository.findById(advertisementId)

    return foundAdvertisement;
  }


  async updateMyAdvertisement(advertisementId: number, newAdvertisement: Omit<AdvertisementsDTO,'categoryName'>){
    await this.advertisementsRepository.updateById(advertisementId,{
      advertisementTitle: newAdvertisement.advertisementTitle,
      description: newAdvertisement.description,
      price: newAdvertisement.price,
      currency: newAdvertisement.currency,
      status: newAdvertisement.status
    });
  }

  async deleteByAdvertisementId(advertisementId: number){
    await this.advertisementsRepository.deleteById(advertisementId)
  }

  async updateAdvertisementApproved(advertisementId: number, newApprovedStatus:boolean){
    await this.advertisementsRepository.updateById(advertisementId,{
      isApproved: newApprovedStatus
    })
  }
    
}
