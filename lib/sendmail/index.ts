import { BEST_POS_URL } from '@/constants';
import { AppConfigModel } from 'lib/entities/app_config';
import { getMongoDbClient } from 'lib/mongodb';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export const sendEmail = async (option: Mail.Options, prefix = 'BestPOS lead') => {
  const mailReceivers: Array<string> = [];

  if (!process.env.ENABLE_SENDING_EMAIL) {
    return false;
  }

  const senderMail = `${process.env.SENDER_MAIL_ACCOUNT}`;

  try {
    if (process.env.ENV === 'production') {
      await getMongoDbClient(BEST_POS_URL);
      const configs = await AppConfigModel.find({});
      mailReceivers.push(...(configs?.[0]?.mail_receivers || []));
    } else {
      mailReceivers.push(`${process.env.RECEIVER_EMAIL}`);
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      secure: true,
      auth: {
        user: senderMail,
        pass: `${process.env.SENDER_EMAIL_PASSWORD}`,
      },
    });

    const res = await transporter.sendMail({
      from: `${prefix} <${senderMail}>`,
      to: mailReceivers,
      subject: 'bestpos',
      ...option,
    });
    console.log(res);
    return true;
  } catch (error) {
    console.log('error ', error);
    return false;
  }
};

export const sendMailToAdmin = async (option: Mail.Options) => sendEmail(option, 'BestPOS lead');

export const sendMailToCustomer = async (option: Mail.Options) => sendEmail(option, 'BestPOS');
