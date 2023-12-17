import {Entity, model, property} from '@loopback/repository';
import {ModelStatus} from "./models-utils";

@model({name: 'companies',settings: {strict: true}})
export class Companies extends Entity {
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
      columnName: "company_title"
    }
  })
  companyTitle: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: "tax_number"
    }
  })
  taxNumber: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: "tax_office"
    }
  })
  taxOffice: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

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
      columnName: "official_user_id"
    }
  })
  officialUserId: number;

  @property({
    type: 'string',
    required: true,
    default: ModelStatus.ACTIVE,
    jsonSchema: {
      enum: [ModelStatus]
    }
  })
  status: string;

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



  constructor(data?: Partial<Companies>) {
    super(data);
  }
}

export interface CompaniesRelations {
  // describe navigational properties here
}

export type CompaniesWithRelations = Companies & CompaniesRelations;
