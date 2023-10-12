import { FormData } from '@/models/form_data';

const BRAVO_API_KEY =
  process.env.NEXT_PUBLIC_BRAVO_API_KEY ??
  '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';

const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';

interface EmailContent {
  sender: {
    name: string;
    email: string;
  };
  to: Array<{
    name: string;
    email: string;
  }>;
  subject: string;
  htmlContent?: string;
}

const sendEmail = async (data: EmailContent) => {
  await fetch(BREVO_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': BRAVO_API_KEY,
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
    redirect: 'follow',
  });
};

const sendEmailToCustomer = async () => {};

const sendEmailToSaleTeam = async (data: FormData) => {
  const htmlContent = `<!DOCTYPE html>
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
          <li><strong>Customer name:</strong> ${data.firstname} ${data.lastname}</li>
          <li><strong>Phone number:</strong> ${data.phone}</li>
          <li><strong>Email:</strong> ${data.email}</li>
        </ul>
        <p>Please follow up with the customer as soon as possible.</p>
        <p>Best regards</p>
      </body>
    </html>`;

  await sendEmail({
    sender: {
      name: `${process.env.NEXT_PUBLIC_SENDER_NAME}`,
      email: `${process.env.NEXT_PUBLIC_SENDER_EMAIL}`,
    },
    to: [
      {
        name: `${process.env.NEXT_PUBLIC_EMAIL_SALE_TEAM_NAME}`,
        email: `${process.env.NEXT_PUBLIC_EMAIL_SALE_TEAM}`,
      },
    ],
    subject: 'Extrabread lead - New Inquiry',
    htmlContent: htmlContent,
  });
};

export { sendEmail, sendEmailToCustomer, sendEmailToSaleTeam };
