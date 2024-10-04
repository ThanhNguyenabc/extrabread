import { ContactInfo } from "./contact_info";

export interface RequestDemoContact {
  typeBusiness: string;
  otherPOS: string;
  posSystems: string;
  contact: ContactInfo;
}
