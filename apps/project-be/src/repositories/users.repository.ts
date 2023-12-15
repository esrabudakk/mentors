import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Users, UsersRelations, UserRoles} from '../models';
import {UserRolesRepository} from './user-roles.repository';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id,
  UsersRelations
> {

  public readonly userRoles: HasManyRepositoryFactory<UserRoles, typeof Users.prototype.id>;

  constructor(
    @inject('datasources.pg') dataSource: PgDataSource, @repository.getter('UserRolesRepository') protected userRolesRepositoryGetter: Getter<UserRolesRepository>,
  ) {
    super(Users, dataSource);
    this.userRoles = this.createHasManyRepositoryFactoryFor('userRoles', userRolesRepositoryGetter,);
    this.registerInclusionResolver('userRoles', this.userRoles.inclusionResolver);
  }
}
