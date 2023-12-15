import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {UserRoles, UserRolesRelations, Users} from '../models';
import {UsersRepository} from './users.repository';

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
