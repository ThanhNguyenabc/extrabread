import { sendToAirtable } from '@/lib/airtable';
import { sendEmailToCustomer, sendEmailToSaleTeam } from '@/lib/send_mail';
import { NextApiRequest, NextApiResponse } from 'next';

const PageConfigs = {
  partner: {
    adminEmail: {
      title: 'New Partner Inquiry',
      desc: 'We have received a new inquiry from a potential partner. Here are the details:',
    },
    table: 'Partners',
    service: 'Business Partner',
    templateName: 'partner_email.html',
    customerEmail: {
      subject: "Let's Get Your Side Hustle Started! 🥳",
    },
  },
  default: {
    adminEmail: {
      title: 'New Business Inquiry',
      desc: 'We have received a new inquiry from a potential customer. Here are the details',
    },
    table: 'Leads',
    service: '',
  },
  referral: {
    adminEmail: {
      title: 'New Business Inquiry',
      desc: 'We have received a new referral information. Here are the details',
    },
    table: 'Referral',
    service: '',
  },
  funding: {
    adminEmail: {
      title: 'New Business Inquiry',
      desc: 'We have received a new customer information from funding. Here are the details',
    },
    table: 'SameDayFunding',
    service: '',
  },
};

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    switch (request.method) {
      case 'POST': {
        const {
          data,
          conversionFunnel,
          contact,
          sendMailToCustomer = true,
          adminHtmlBody = null,
        } = JSON.parse(request.body);

        const pageConfig: {
          table: string;
          service: string;
          adminEmail: object;
          customerEmail: object;
          templateName?: string;
        } = PageConfigs[conversionFunnel] || PageConfigs['default'];

        const promises = [
          sendEmailToSaleTeam({
            contact: contact,
            title: pageConfig['adminEmail']?.['title'],
            desc: pageConfig['adminEmail']?.['desc'],
            htmlBody: adminHtmlBody,
          }),
          sendToAirtable(pageConfig.table, data['airtable'] || {}),
        ];

        if (sendMailToCustomer) {
          promises.push(
            sendEmailToCustomer({
              contact: contact,
              serviceName: data['service'] || pageConfig.service,
              templateName: pageConfig.templateName,
              mailOptions: {
                subject: pageConfig['customerEmail']?.['subject'] || 'Extrabread',
              },
            }),
          );
        }

        await Promise.all(promises);

        return response.status(200).json({ status: 200 });
      }
    }
  } catch (error) {
    console.log('submit form error = ', error);
  }
  return response.status(500).json({ status: 500, message: 'Internal server error' });
}
