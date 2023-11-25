import {Entity, model, property} from '@loopback/repository';

@model()
export class Consultant extends Entity {
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
      columnName: "consultant_type"
    }
  })
  consultantType: string;

  @property({
    type: 'string',
    required: true,
  })
  education: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: "career_information"
    }
  })
  careerInformation: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

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


  constructor(data?: Partial<Consultant>) {
    super(data);
  }
}

export interface ConsultantRelations {
  // describe navigational properties here
}

export type ConsultantWithRelations = Consultant & ConsultantRelations;
