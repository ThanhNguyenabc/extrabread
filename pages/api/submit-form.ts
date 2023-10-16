import { sendToAirtable } from '@/lib/airtable';
import { sendEmailToCustomer, sendEmailToSaleTeam } from '@/lib/send_mail';
import { NextApiRequest, NextApiResponse } from 'next';

const PageConfigs = {
  partner: {
    title: 'New Partner Inquiry',
    desc: 'We have received a new inquiry from a potential partner. Here are the details:',
    table: 'Partners',
    service: 'Business Partner',
  },
  default: {
    title: 'New Business Inquiry',
    desc: 'We have received a new inquiry from a potential customer. Here are the details',
    table: 'Leads',
    service: 'Get pricing POS',
  },
};

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    switch (request.method) {
      case 'POST':
        const {
          data,
          conversion_funnel,
          ref_url,
          contact,
          adminHtmlBody = null,
        } = JSON.parse(request.body);

        const pageConfig: {
          title: string;
          desc: string;
          table: string;
          service: string;
          airtableBody: (data) => object;
        } = PageConfigs[conversion_funnel] || PageConfigs['default'];

        await Promise.all([
          sendEmailToCustomer({
            data: contact,
            serviceName: pageConfig.service,
          }),
          sendEmailToSaleTeam({
            data: contact,
            title: pageConfig.title,
            desc: pageConfig.desc,
            htmlBody: adminHtmlBody,
          }),
          sendToAirtable(pageConfig.table, data),
        ]);
        return response.status(200).json({ status: 200 });

      default:
        break;
    }
  } catch (error) {}
  return response.status(500).json({ status: 500, message: 'Internal server error' });
}
