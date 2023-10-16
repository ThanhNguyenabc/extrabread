import { sendEmailToCustomer, sendEmailToSaleTeam } from '@/lib/send_mail';
import { NextApiRequest, NextApiResponse } from 'next';

const mailmessages = {
  partner: {
    title: 'New Partner Inquiry',
    desc: 'We have received a new inquiry from a potential partner. Here are the details:',
  },
  default: {
    title: 'New Business Inquiry',
    desc: 'We have received a new inquiry from a potential customer. Here are the details',
  },
};
export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    switch (request.method) {
      case 'POST':
        const { data, conversion_funnel, ref_url } = JSON.parse(request.body);

        const mailInfor: { title: string; desc: string } =
          mailmessages[conversion_funnel] || mailmessages['default'];

        await Promise.all([
          sendEmailToCustomer({
            data,
            serviceName: conversion_funnel,
          }),
          sendEmailToSaleTeam({
            data,
            title: mailInfor.title,
            desc: mailInfor.desc,
          }),
        ]);
        return response.status(200).json({ status: 200 });

      default:
        break;
    }
  } catch (error) {}
  return response.status(500).json({ status: 500, message: 'Internal server error' });
}
