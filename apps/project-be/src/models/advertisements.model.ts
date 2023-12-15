import {Entity, model, property} from '@loopback/repository';
import {ModelStatus} from "./models-utils";

@model({name: 'advertisements',settings: {strict: true}})
export class Advertisements extends Entity {
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
      columnName: "advertisement_title"
    }
  })
  advertisementTitle: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  currency: string;

  @property({
    type: 'string',
    required: true,
    default: ModelStatus.ACTIVE,
  })
  status: ModelStatus;

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
    type: 'number',
    required: true,
    postgresql: {
      columnName: "category_id"
    }
  })
  categoryId: number;

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



  constructor(data?: Partial<Advertisements>) {
    super(data);
  }
}

export interface AdvertisementsRelations {
  // describe navigational properties here
}

export type AdvertisementsWithRelations = Advertisements & AdvertisementsRelations;
