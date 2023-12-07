import {Entity, model, property, hasMany} from '@loopback/repository';
import {Users} from './users.model';

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
    type: 'number',
    required: true,
    postgresql: {
      columnName: "role_id"
    }
  })
  roleId: number;

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

  constructor(data?: Partial<UserRoles>) {
    super(data);
  }
}

export interface UserRolesRelations {
  // describe navigational properties here
}

export type UserRolesWithRelations = UserRoles & UserRolesRelations;
