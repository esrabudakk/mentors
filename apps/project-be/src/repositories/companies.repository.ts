import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Companies, CompaniesRelations} from '../models';

export class CompaniesRepository extends DefaultCrudRepository<
  Companies,
  typeof Companies.prototype.id,
  CompaniesRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(Companies, dataSource);
  }
}
