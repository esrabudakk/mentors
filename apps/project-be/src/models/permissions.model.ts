import {Entity, model, property} from '@loopback/repository';

@model()
export class Permissions extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: "permission_name"
    }
  })
  permissionName: string;

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


  constructor(data?: Partial<Permissions>) {
    super(data);
  }
}

export interface PermissionsRelations {
  // describe navigational properties here
}

export type PermissionsWithRelations = Permissions & PermissionsRelations;
