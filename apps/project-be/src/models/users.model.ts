import {Entity, model, property} from '@loopback/repository';
import {ModelStatus} from "./models-utils";

@model({name: 'users',settings: {strict: true}})
export class Users extends Entity {
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
      columnName: "first_name"
    }
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: "last_name"
    }
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
    required: true,
    default: ModelStatus.ACTIVE,
  })
  status: ModelStatus;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: "about_message"
    }
  })
  aboutMessage: string;

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

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
