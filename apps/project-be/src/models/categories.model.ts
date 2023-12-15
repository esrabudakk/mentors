import {Entity, model, property} from '@loopback/repository';
import {ModelStatus} from "./models-utils";

@model({name: 'categories',settings: {strict: true}})
export class Categories extends Entity {
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
      columnName: "category_type"
    }
  })
  categoryType: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
    default: ModelStatus.ACTIVE,
  })
  status: ModelStatus;

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


  constructor(data?: Partial<Categories>) {
    super(data);
  }
}

export interface CategoriesRelations {
  // describe navigational properties here
}

export type CategoriesWithRelations = Categories & CategoriesRelations;
