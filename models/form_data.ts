import { Contact } from './contact.model';

export interface FormData {
  contact: Contact;
  data?: any;
  conversion_funnel: string;
  ref_url: string;
}
