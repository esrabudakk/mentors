import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {UserRoles, UserRolesRelations} from '../models';

export class UserRolesRepository extends DefaultCrudRepository<
  UserRoles,
  typeof UserRoles.prototype.id,
  UserRolesRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(UserRoles, dataSource);
  }
}
