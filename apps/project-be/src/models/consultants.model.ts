import {Entity, model, property} from '@loopback/repository';
import {ModelStatus} from "./models-utils";

@model({name: 'consultants',settings: {strict: true}})
export class Consultants extends Entity {
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
    jsonSchema: {
      enum: [ModelStatus]
    }
  })
  status: string;

  @property({
    type: 'boolean',
    required: true,
    postgresql: {
      columnName: "is_approved"
    }
  })
  isApproved: boolean;

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


  constructor(data?: Partial<Consultants>) {
    super(data);
  }
}

export interface ConsultantsRelations {
  // describe navigational properties here
}

export type ConsultantsWithRelations = Consultants & ConsultantsRelations;
