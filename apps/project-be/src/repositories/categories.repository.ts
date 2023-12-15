import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Categories, CategoriesRelations} from '../models';

export class CategoriesRepository extends DefaultCrudRepository<
  Categories,
  typeof Categories.prototype.id,
  CategoriesRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(Categories, dataSource);
  }
}
