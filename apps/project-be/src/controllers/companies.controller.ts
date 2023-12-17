
import {
    post,
    param,
    get,
    getModelSchemaRef,
    patch,
    requestBody,
    response,
  } from '@loopback/rest';
  import {Companies, Users} from '../models';
import { service } from '@loopback/core';
import { CompaniesService } from '../services/companies.service';
import {authorize} from "@loopback/authorization";
import {PermissionKeys} from "../services/enums";
  export class CompaniesController {
    constructor(
     @service(CompaniesService)
     public companiesService: CompaniesService
    ) {}

    @authorize({allowedRoles:[PermissionKeys.CREATE_COMPANY]})
    @post('/companies/my-company')
    @response(200, {
      description: 'Companies model instance',
      content: {'application/json': {schema: getModelSchemaRef(Companies)}},
    })
    async createCompany(
      @requestBody({
        content: {
          'application/json': {
          },
        },
      })
      newCompanyData : Companies
    ){
      return this.companiesService.createMyCompany(newCompanyData)
    }
  @authorize({})
    @get('/companies')
    @response(200, {
      description: 'Array of Users model instances',
      content: {
        'application/json': {
          schema: {
          },
        },
      },
    })
    async findCompanies(
    ): Promise<Companies[]> {
      return this.companiesService.getCompanies();
    }

 @authorize({allowedRoles: [PermissionKeys.VIEW_OWN_PROFILE]})
    @get('/companies/{id}')
    @response(200, {
      description: 'Array of Company model instances',
      content: {
        'application/json': {
          schema: {
          },
        },
      },
    })
    async findCompanyById(
      @param.path.number('id') id:number
    ): Promise<Companies> {
      return this.companiesService.getCompanyById(id);
    }

    @authorize({allowedRoles:[PermissionKeys.UPDATE_COMPANY_PROFILE]})
    @patch('/companies/{id}/status')
    async updateMyProfile(
      @param.path.number('id') id:number,
      @requestBody() newStatus: string
    ) {
      await this.companiesService.updateCompanyStatus(id, newStatus);
    }

      @authorize({allowedRoles: [PermissionKeys.APPROVE_COMPANY]})
      @patch('/companirs/{id}')
      async updateCompanyApproved(
          @param.path.number('id') id:number,
          @requestBody() isApproved: boolean
      ) {
          await this.companiesService.updateCompanyApproved(id, isApproved);
      }
  }
  