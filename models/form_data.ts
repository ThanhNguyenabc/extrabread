import { Contact } from './contact.model';

export interface FormData {
  contact: Contact;
  data?: any;
  conversionFunnel: string;
  refUrl: string;
  adminHtmlBody?: string;
  sendMailToCustomer?: boolean;
}
