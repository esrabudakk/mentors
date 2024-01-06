import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {UserRoles, UserRolesRelations, Users, Roles} from '../models';
import {UsersRepository} from './users.repository';
import {RolesRepository} from './roles.repository';

export class UserRolesRepository extends DefaultCrudRepository<
  UserRoles,
  typeof UserRoles.prototype.id,
  UserRolesRelations
> {

  public readonly roles: BelongsToAccessor<Roles, typeof UserRoles.prototype.id>;

  constructor(
    @inject('datasources.pg') dataSource: PgDataSource, @repository.getter('RolesRepository') protected rolesRepositoryGetter: Getter<RolesRepository>,
  ) {
    super(UserRoles, dataSource);
    this.roles = this.createBelongsToAccessorFor('roles', rolesRepositoryGetter,);
    this.registerInclusionResolver('roles', this.roles.inclusionResolver);
  }
}
