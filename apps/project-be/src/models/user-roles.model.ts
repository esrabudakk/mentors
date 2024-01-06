import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Users} from './users.model';
import {Roles} from './roles.model';

@model({name: 'user_roles', settings: {strict: true}})
export class UserRoles extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: "user_id"
    }
  })
  userId: number;

  @property({
    type: 'date',
    postgresql: {
      columnName: "created_at"
    }
  })
  createdAt?: string;

  @property({
    type: 'number',
    postgresql: {
      columnName: "created_by"
    }
  })
  createdBy?: number;

  @property({
    type: 'date',
    postgresql: {
      columnName: "updated_at"
    }
  })
  updatedAt?: string;

  @property({
    type: 'number',
    postgresql: {
      columnName: "updated_by"
    }
  })
  updatedBy?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'role_id',
    },
  })
  roleId: number;

  @belongsTo(() => Roles, { name: 'roles' })
  role_id: number;

  constructor(data?: Partial<UserRoles>) {
    super(data);
  }
}

export interface UserRolesRelations {
  roles : Roles
}

export type UserRolesWithRelations = UserRoles & UserRolesRelations;
