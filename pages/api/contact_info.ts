import { sendToAirtable } from '@/lib/airtable';
import { ContactInfo } from '@/models/bestpos/contact_info';
import { DataSubmission } from '@/models/bestpos/data_submission';
import dayjs from 'dayjs';
import { sendMailToAdmin, sendMailToCustomer } from 'lib/sendmail';
import { getEmailTemplate } from 'lib/template';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'POST': {
        const { conversion_funnel, ref_url, data } = req.body as DataSubmission;
        const { phone, email, name, zipcode, message } = data as ContactInfo;
        const content = [
          `Customer name: ${name}`,
          `Customer email: ${email}`,
          `Customer phone number: ${phone}`,
          `Zipcode: ${zipcode}`,
          `Message: ${message}`,
        ];

        const promises = [
          sendToAirtable('Leads', {
            body: {
              'Ref URL': ref_url,
              'Conversion Funnel': conversion_funnel,
              Name: name,
              Phone: phone,
              Email: email,
              Message: message,
              'Created Date': dayjs().format('MM/DD/YYYY hh:mm'),
            },
          }),
          sendMailToAdmin({
            subject: 'Bestpos lead - Contact',
            html: `<h3>We have new customer with the following information</h3><br>${content.join(
              '<br>',
            )}`,
          }),
          async () => {
            const customerMail = await getEmailTemplate(
              'Thanks for reaching out to us',
              'We received your inquiry.',
              name,
            );
            sendMailToCustomer({
              subject: "We've received your request. 🥳  Here's what's next. 👉",
              html: customerMail,
              to: email,
            });
          },
        ];
        await Promise.all(promises);
        return res.status(200).json({ data: true });
      }
    }
  } catch (error) {
    console.log('error------contact');
    console.log(error);
  }
}
