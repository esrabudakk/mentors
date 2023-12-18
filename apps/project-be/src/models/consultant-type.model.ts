import {Entity, model, property} from '@loopback/repository';

@model()
export class ConsultantType extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  consultant_name: string

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
  constructor(data?: Partial<ConsultantType>) {
    super(data);
  }
}

export interface ConsultantTypeRelations {
  // describe navigational properties here
}

export type ConsultantTypeWithRelations = ConsultantType & ConsultantTypeRelations;
