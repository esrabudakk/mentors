import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Advertisements, AdvertisementsRelations} from '../models';

export class AdvertisementsRepository extends DefaultCrudRepository<
  Advertisements,
  typeof Advertisements.prototype.id,
  AdvertisementsRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(Advertisements, dataSource);
  }
}
