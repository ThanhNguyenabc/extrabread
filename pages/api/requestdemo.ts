import { sendToAirtable } from '@/lib/airtable';
import { sendMailToAdmin, sendMailToCustomer } from '@/lib/sendmail';
import { getEmailTemplate } from '@/lib/template';
import { DataSubmission } from '@/models/bestpos/data_submission';
import { RequestDemoContact } from '@/models/bestpos/request_demo_contact';
import dayjs from 'dayjs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'POST': {
        const { data, conversion_funnel, ref_url } = req.body as DataSubmission;
        const { contact, typeBusiness, otherPOS, posSystems } = data as RequestDemoContact;
        const { name, phone, email } = contact;
        const content = [
          `Business type: ${typeBusiness}\n`,
          `Interested POS: ${posSystems}`,
          `Other interested POS: ${otherPOS || '_'}`,
          `Customer information`,
          `Customer name: ${name}`,
          `Customer email: ${email}`,
          `Customer phone number: ${phone}`,
        ];

        const promises = [
          sendToAirtable('Leads', {
            'Ref URL': ref_url,
            'Conversion Funnel': conversion_funnel,
            Name: name,
            Phone: phone,
            Email: email,
            'Business Type': typeBusiness,
            'Interested POS': posSystems,
            'Other POS': otherPOS,
            'Created Date': dayjs().format('MM/DD/YYYY hh:mm'),
          }),
          // sendMailToAdmin({
          //   text: 'Bespot1',
          //   subject: 'Bestpos lead - Request a demo',
          //   html: `<h3>We have new data with the following information</h3><br>
          //       ${content.join('<br>')}`,
          // }),
          // async () => {
          //   const emailContent = await getEmailTemplate(
          //     'Thank you for requesting a demo!',
          //     'We received your information in regards to a free POS demo.',
          //     name,
          //   );

          //   sendMailToCustomer({
          //     subject: "We've received your request. 🥳  Here's what's next. 👉",
          //     html: emailContent,
          //     to: email,
          //   });
          // },
        ];
        await Promise.all(promises);
        return res.status(200).json({ data: true });
      }
      default:
        break;
    }
  } catch (error) {
    res.status(500).json({ data: error });
  }
}
