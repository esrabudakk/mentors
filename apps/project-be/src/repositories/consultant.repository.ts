import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Consultant, ConsultantRelations} from '../models';

export class ConsultantRepository extends DefaultCrudRepository<
  Consultant,
  typeof Consultant.prototype.id,
  ConsultantRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(Consultant, dataSource);
  }
}
