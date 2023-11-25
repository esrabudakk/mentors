import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Consultants, ConsultantsRelations} from '../models';

export class ConsultantsRepository extends DefaultCrudRepository<
  Consultants,
  typeof Consultants.prototype.id,
  ConsultantsRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(Consultants, dataSource);
  }
}
