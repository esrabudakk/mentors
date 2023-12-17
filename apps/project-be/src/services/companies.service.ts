import {repository} from "@loopback/repository";
import {CompaniesRepository, RolesRepository, UserRolesRepository, UsersRepository} from "../repositories";
import { inject } from "@loopback/core";
import { UserServiceBindings } from "../keys";
import { Companies, Users } from "../models";
import { ModelStatus } from "../models/models-utils";



export class CompaniesService {
    constructor(
        @repository(CompaniesRepository)
        public companiesRepository: CompaniesRepository,
        @inject(UserServiceBindings.USER) public user: Users
    ) {
    }

    //TODO : zod schema ekle official_user_id yok
    async createMyCompany(newCompanyData: Companies){
        const createdCompany = await this.companiesRepository.create({
            ...newCompanyData,
            officialUserId: this.user.id,
            status: ModelStatus.PASSIVE,
            createdAt: new Date().toISOString(),
            createdBy: this.user.id
        })
        return createdCompany;
    }

    async updateCompanyStatus(companyId: number,newStatus: string){
        await this.companiesRepository.updateById(companyId, {
            status: newStatus,
            updatedAt: new Date().toISOString(),
            updatedBy: this.user.id
        })
    }

    async getCompanyById(companyId: number){
        return this.companiesRepository.findById(companyId)
    }

    async getCompanies(){
        return this.companiesRepository.find();
    }
    async updateCompanyApproved(consultantId: number, newApprovedStatus:boolean){
        await this.companiesRepository.updateById(consultantId,{
            isApproved: newApprovedStatus
        })
    }


}