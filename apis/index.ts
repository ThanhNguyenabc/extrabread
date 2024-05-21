import { FormData } from '@/models/form_data';
import { FormValue } from '@/ui/templates/get-pricing/types';

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

export const submitGetPricing = async (
  formValues: FormValue,
  ref: string,
  sendMailToCustomer = true,
) => {
  try {
    const mailHtmlBody = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>New Business Inquiry</title>
        </head>
        <body>
          <h1>New Business Inquiry</h1>
          <p>Dear Sales Team,</p>
          <p>We have received a new inquiry from a potential customer. Here are the details:</p>
          <ul>
            <li><strong>What type of business?</strong> ${formValues.typeBusiness}</li>
            <li><strong>What are you looking for?</strong> ${formValues.lookingFor}</li>
            <li><strong>Cash signing bonus:</strong> ${formValues.cashBonus ? 'Yes' : 'No'}</li>
            <li><strong>How many stations are you looking for?</strong> ${
              formValues.stationsLookingFor
            }</li>
            <li><strong>Personal name:</strong> ${formValues.name}</li>
            <li><strong>Business name:</strong> ${formValues.business_name}</li>
            <li><strong>Phone number:</strong> ${formValues.phone}</li>
            <li><strong>Email:</strong> ${formValues.email}</li>
            <li><strong>Website:</strong> ${formValues.website}</li>
            <li><strong>How did you hear about us?</strong> ${formValues.heardAbout}</li>
            <li><strong>Are you currently on cash discount?</strong> ${
              formValues.onCashDiscount ? 'Yes' : 'No'
            }</li>
            <li><strong>What is your monthly credit card processing volume?</strong> ${
              formValues.price
            }k $</li>
            <li><strong>How many locations do you have?</strong> ${formValues.locationsHave}</li>
            <li><strong>How many stations do you currently have?</strong> ${
              formValues.stationsHave
            }</li>
            <li><strong>What point-of-sale system are you currently using?</strong> ${
              formValues.usingPointOfSale
            }</li>
          </ul>
          <p>Please follow up with the customer as soon as possible.</p>
          <p>Best regards,</p>
          <p>Your Company</p>
        </body>
      </html>`;

    await submitForm({
      conversionFunnel: 'get_pricing',
      refUrl: ref,
      adminHtmlBody: mailHtmlBody,
      sendMailToCustomer: sendMailToCustomer,
      data: {
        airtable: {
          'What type of business?': formValues.typeBusiness,
          'What are you looking for?': formValues.lookingFor,
          'Cash signing bonus': formValues.cashBonus ? '1' : '0',
          'How many stations are you looking for?': formValues.stationsLookingFor,
          'Business name': formValues.business_name,
          'Personal name': formValues.name,
          'Phone number': formValues.phone,
          Email: formValues.email,
          Website: formValues.website,
          'How did you hear about us?': formValues.heardAbout,
          'Are you currently on cash discount?': formValues.onCashDiscount,
          'What is your monthly credit card processing volume?': `${formValues.price}k $`,
          'How many locations do you have?': String(formValues.locationsHave),
          'How many stations do you currently have?': formValues.stationsHave,
          'What point-of-sale system are you currently using?': formValues.usingPointOfSale,
        },
        service: formValues.lookingFor,
      },
      contact: {
        email: formValues.email || '',
        phone: formValues.phone || '',
        firstname: formValues.name || '',
        lastname: '',
        businessName: formValues.business_name,
      },
    });
    return true;
  } catch (error) {
    console.log(error);
  }
  return false;
};
