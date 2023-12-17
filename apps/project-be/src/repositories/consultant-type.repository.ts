import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {ConsultantType, ConsultantTypeRelations} from '../models';

export class ConsultantTypeRepository extends DefaultCrudRepository<
  ConsultantType,
  typeof ConsultantType.prototype.id,
  ConsultantTypeRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(ConsultantType, dataSource);
  }
}
