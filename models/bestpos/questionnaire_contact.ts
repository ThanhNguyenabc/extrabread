import { ContactInfo } from "./contact_info";

export interface QuestionnaireContact {
  business: string;
  haveSaleSystem: string;
  numberOfStations: string;
  numberOfHandheld: string;
  contact: ContactInfo;
  onDiscountProgram: string;
}
