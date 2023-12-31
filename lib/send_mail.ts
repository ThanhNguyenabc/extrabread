import { Contact } from '@/models/contact.model';
import ejs from 'ejs';
import { readFile } from 'fs/promises';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import path from 'path';

const senderMail = `${process.env.SENDER_EMAIL}`;
const senderEmailPassword = `${process.env.SENDER_EMAIL_PASSWORD}`;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    user: senderMail,
    pass: senderEmailPassword,
  },
});


export const sendEmail = async ({
  mailOption,
  prefix = 'Extrabread',
}: {
  mailOption?: Mail.Options;
  prefix?: string;
}) => {
  try {
    await transporter.sendMail({
      from: `${prefix} <${senderMail}>`,
      subject: 'Extrabread',
      to: `${process.env.RECEIVER_EMAIL}`,
      ...mailOption,
    });
    return true;
  } catch (error) {
    console.log('error ', error);
    return false;
  }
};

const sendEmailToCustomer = async ({
  contact,
  mailOptions,
  serviceName = 'POS provider',
  templateName = 'customer_email.html',
}: {
  contact: Contact;
  mailOptions?: Mail.Options;
  serviceName?: string;
  templateName?: string;
}) => {
  try {
    const template = await generateEmailTemplate(templateName, {
      data: {
        name: `${contact.firstname} ${contact.lastname}`.toUpperCase(),
        content: serviceName,
      },
    });

    await sendEmail({
      mailOption: {
        html: template,
        to: contact.email,
        ...mailOptions,
      },
    });
    return true;
  } catch (error) {
    console.log('sending email error: ', error);
  }
  return false;
};

const sendEmailToSaleTeam = async ({
  title = 'New Business Inquiry',
  desc = 'We have received a new inquiry from a potential customer. Here are the details:',
  contact,
  htmlBody,
}: {
  contact: Contact;
  title?: string;
  desc?: string;
  htmlBody?: string;
}) => {
  try {
    const htmlContent =
      htmlBody ||
      `<!DOCTYPE html>
    <html>
      <body>
        <h1>${title}</h1>
        <p>Dear Sales Team,</p>
        <p>${desc}</p>
        <ul>
          <li><strong>Customer name:</strong> ${contact.firstname} ${contact.lastname}</li>
          <li><strong>Phone number:</strong> ${contact.phone}</li>
          <li><strong>Email:</strong> ${contact.email}</li>
        </ul>
        <p>Please follow up with the customer as soon as possible.</p>
        <p>Best regards</p>
      </body>
    </html>`;

    await sendEmail({
      mailOption: {
        html: htmlContent,
      },
      prefix: 'Extrabrea new lead',
    });
    return true;
  } catch (error) {
    console.log('sending email error: ', error);
  }

  return false;
};

export const generateEmailTemplate = async (
  fileName: string,
  {
    data,
  }: {
    data?: { [key: string]: string };
  },
) => {
  const publicFolder = path.resolve(process.cwd(), 'public');
  const template = await readFile(path.join(publicFolder, fileName), 'utf-8');
  return ejs.render(template, data);
};

export { sendEmailToCustomer, sendEmailToSaleTeam };
