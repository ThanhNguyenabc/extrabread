import { sendToAirtable } from '@/lib/airtable';
import { sendEmailToCustomer, sendEmailToSaleTeam } from '@/lib/send_mail';
import { Contact } from '@/models/contact.model';
import { NextApiRequest, NextApiResponse } from 'next';

const partnerBodyTemplate = (data: Contact) => {
  return {
    'First name': data.firstname,
    'Last name': data.lastname,
    'Phone number': data.phone,
    Email: data.email,
  };
};

const PageConfigs = {
  partner: {
    title: 'New Partner Inquiry',
    desc: 'We have received a new inquiry from a potential partner. Here are the details:',
    table: 'Partners',
    airtableBody: partnerBodyTemplate,
  },
  default: {
    title: 'New Business Inquiry',
    desc: 'We have received a new inquiry from a potential customer. Here are the details',
    table: 'Leads',
  },
};

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    switch (request.method) {
      case 'POST':
        const { data, conversion_funnel, ref_url, contact } = JSON.parse(request.body);

        const pageConfig: {
          title: string;
          desc: string;
          table: string;
          airtableBody: (data) => object;
        } = PageConfigs[conversion_funnel] || PageConfigs['default'];

        await Promise.all([
          sendEmailToCustomer({
            data,
            serviceName: conversion_funnel,
          }),
          sendEmailToSaleTeam({
            data,
            title: pageConfig.title,
            desc: pageConfig.desc,
          }),
          sendToAirtable(pageConfig.table, pageConfig.airtableBody(data)),
        ]);
        return response.status(200).json({ status: 200 });

      default:
        break;
    }
  } catch (error) {}
  return response.status(500).json({ status: 500, message: 'Internal server error' });
}
