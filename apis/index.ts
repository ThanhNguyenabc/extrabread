import { Contact } from '@/models/contact.model';
import { FormData } from '@/models/form_data';

export const submitForm = async (data: FormData) => {
  try {
    await fetch('api/submit-form', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return true;
  } catch (error) {}
  return false;
};
