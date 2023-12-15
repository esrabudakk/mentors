import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Permissions, PermissionsRelations} from '../models';

export class PermissionsRepository extends DefaultCrudRepository<
  Permissions,
  typeof Permissions.prototype.id,
  PermissionsRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(Permissions, dataSource);
  }
}
