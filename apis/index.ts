import { Contact } from '@/models/contact.model';
import { FormData } from '@/models/form_data';

export const submitForm = async ({ data, conversion_funnel, ref_url, contact }: FormData) => {
  try {
    await fetch('api/submit-form', {
      method: 'POST',
      body: JSON.stringify({
        data,
        contact,
        conversion_funnel,
        ref_url,
      }),
    });
    return true;
  } catch (error) {}
  return false;
};
