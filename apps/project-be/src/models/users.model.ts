import {Entity, model, property} from '@loopback/repository';

@model({name: 'users', settings: {strict: true}})
export class Users extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true
  })
  first_name: string;

  @property({
    type: 'string',
    required: true
  })
  last_name: string;

  @property({
    type: 'string',
    required: true
  })
  username: string;

  @property({
    type: 'string',
    required: true
  })
  email: string;

  @property({
    type: 'string',
    required: true
  })
  phone: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      enum: ['ACTIVE', 'PASSIVE']
    }
  })
  status: string;

  @property({
    type: 'string',
    required: true
  })
  about_message: string;

  @property({
    type: 'date',
  })
  created_at?: string;

  @property({
    type: 'number',
  })
  created_by?: number;

  @property({
    type: 'date',
  })
  updated_at?: string;

  @property({
    type: 'number',
  })
  updated_by?: number;


  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
