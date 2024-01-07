import {repository} from "@loopback/repository";
import {ConsultantsRepository, ConsultantTypeRepository} from "../repositories";
import {Consultants, Users} from "../models";
import {ModelStatus} from "../models/models-utils";
import {inject} from "@loopback/core";
import {UserServiceBindings} from "../keys";

enum ConsultantType {
    FINANCIAL_CONSULTANT = "Financial Consultant",
    MARKETING_CONSULTANT = "Marketing Consultant",
    STARTUP_ADVISOR = "Startup Advisor"
}

export interface ConsultantDTO extends Pick<Consultants, 'consultantTypeId'| 'careerInformation'| 'education'> {

}

export class ConsultantsService {
    constructor(
        @repository(ConsultantsRepository)
        public consultantsRepository: ConsultantsRepository,
        @repository(ConsultantTypeRepository)
        public consultantTypeRepository: ConsultantTypeRepository,
        @inject(UserServiceBindings.USER) public user: Users
    ) {
    }

   async createConsultant(newConsultantData : ConsultantDTO){
    const createdConsultant = await this.consultantsRepository.create({
        ...newConsultantData,
        isApproved: false,
        status: ModelStatus.PASSIVE,
        userId: this.user.id,
        createdAt: new Date().toISOString(),
        createdBy: this.user.id
    });
    return createdConsultant;
   }

   async updateByConsultantId(consultantId: number, consultants: ConsultantDTO){
    await this.consultantsRepository.updateById(consultantId,{
        ...consultants
    })
   }
    async updateConsultantApproved(consultantId: number, newApprovedStatus:boolean){
        await this.consultantsRepository.updateById(consultantId,{
            isApproved: newApprovedStatus
        })
    }

    async getConsultantTypes(){
        return this.consultantTypeRepository.find()
    }


}