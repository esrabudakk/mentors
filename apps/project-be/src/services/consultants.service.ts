import {repository} from "@loopback/repository";
import {ConsultantsRepository, RolesRepository, UserRolesRepository, UsersRepository} from "../repositories";
import { Consultants } from "../models";
import { ModelStatus } from "../models/models-utils";

enum ConsultantType {
    FINANCIAL_CONSULTANT = "Financial Consultant",
    MARKETING_CONSULTANT = "Marketing Consultant",
    STARTUP_ADVISOR = "Startup Advisor"
}
export class ConsultantsService {
    constructor(
        @repository(ConsultantsRepository)
        public consultantsRepository: ConsultantsRepository
    ) {
    }

   async createConsultant(newConsultantData : Consultants){
    const createdConsultants = await this.consultantsRepository.create({
        ...newConsultantData,
        status: ModelStatus.PASSIVE

    })

   }

}