import { mapModifiers } from '@/helpers';
import Airtable from 'airtable';
import { message } from 'antd';
import { customAlphabet } from 'nanoid';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useDevice } from '~/hooks/useDetectMobile';
import { Container } from '~/ui/atoms/container/Container';
import { FormContent } from './FormContent';
import styles from './GetPricing.module.scss';
import { IntroduceContent } from './IntroduceContent';
import { FinishContent } from './components/finish-content/FinishContent';
import { FormValue } from './types';

const nanoid = customAlphabet('1234567890abcdef', 10);

// Airtable section
Airtable.configure({
  apiKey:
    process.env.API_KEY ??
    'patpGE7pGfa3hMw8l.9f39b4a6f50ea6c806a18a69d22c94aa19980fd06376fc63afd86499a6151406',
});

const TABLE_NAME = process.env.TABLE_NAME ?? 'Leads';
const BASE_ID = process.env.BASE_ID ?? 'appx9rNfGWh24YO2e';

// Email section
const BRAVO_API_KEY =
  process.env.BRAVO_API_KEY ??
  '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';
const SUBJECT = 'Extrabread lead - New Inquiry';
const SENDER_EMAIL = 'no-reply@extrabread.com';
const SENDER_NAME = 'Extrabread';
const RECIPIENT_EMAIL = 'brian@extrabread.com';
const RECIPIENT_NAME = 'Brian Extrabread';

let currentStep = 1;
let leadsId;

type Props = PropsWithChildren & {
  type?: 'default' | 'lilmo';
};

export const GetPricingTemplate: FC<Props> = ({ type = 'default', children }) => {
  const { isMobile } = useDevice();
  const [step, setStep] = useState(0);
  const [showFinish, setShowFinish] = useState(false);

  useEffect(() => {
    window.dataLayer.push({ event: 'getpricing_business_type' });
  }, []);

  const sendEmail = async (id: string, formValues: FormValue) => {
    const headers = new Headers();
    headers.append('accept', 'application/json');
    headers.append('api-key', BRAVO_API_KEY);
    headers.append('content-type', 'application/json');

    const raw = JSON.stringify({
      sender: {
        name: SENDER_NAME,
        email: SENDER_EMAIL,
      },
      to: [
        {
          email: RECIPIENT_EMAIL,
          name: RECIPIENT_NAME,
        },
      ],
      subject: SUBJECT,
      htmlContent: `<!DOCTYPE html>
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
              <li><strong>ID</strong> ${id}</li>
              <li><strong>What type of business?</strong> ${formValues.typeBusiness}</li>
              <li><strong>What are you looking for?</strong> ${formValues.lookingFor}</li>
              <li><strong>Cash signing bonus:</strong> ${formValues.cashBonus ? 'Yes' : 'No'}</li>
              <li><strong>How many stations are you looking for?</strong> ${
                formValues.stationsLookingFor
              }</li>
              <li><strong>Business name:</strong> ${formValues.name}</li>
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
        </html>`,
    });

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: headers,
      body: raw,
      redirect: 'follow',
    });
    // send the email
    console.log('Email sent successfully:', response.text());
  };

  const sendAirtable = async (id: string, formValues: FormValue) => {
    const body = {
      ID: id,
      'What type of business?': formValues.typeBusiness,
      'What are you looking for?': formValues.lookingFor,
      'Cash signing bonus': formValues.cashBonus ? '1' : '0',
      'How many stations are you looking for?': formValues.stationsLookingFor,
      'Business name': formValues.name,
      'Phone number': formValues.phone,
      Email: formValues.email,
      Website: formValues.website,
      'How did you hear about us?': formValues.heardAbout,
      'Are you currently on cash discount?': formValues.onCashDiscount,
      'What is your monthly credit card processing volume?': `${formValues.price}k $`,
      'How many locations do you have?': String(formValues.locationsHave),
      'How many stations do you currently have?': formValues.stationsHave,
      'What point-of-sale system are you currently using?': formValues.usingPointOfSale,
    };
    const base = Airtable.base(BASE_ID);
    await base(TABLE_NAME).create(body);
    // send the email
    console.log('Airtable sent successfully:');
  };

  const softSubmit = async (formValues: FormValue) => {
    try {
      if (currentStep === 1) {
        leadsId = nanoid();
      }
      await sendAirtable(leadsId, formValues);
      await sendEmail(leadsId, formValues);
      if (currentStep === 2) {
        currentStep = 1;
      } else {
        currentStep++;
      }
    } catch (error: any) {
      message.error(error.message);
      console.error(error);
    }
  };

  const handleSubmit = async (formValues: FormValue) => {
    await softSubmit(formValues);
    setShowFinish(true);
    window.dataLayer.push({ event: 'getpricing_fullinfo' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={mapModifiers('get-pricing', styles, type)}>
      <div className={styles['get-pricing_inner']}>
        {isMobile ? (
          <div className="flex-column">
            {!showFinish && (
              <>
                {step === 0 ? (
                  <IntroduceContent onNext={() => setStep(1)} />
                ) : (
                  <FormContent onFinish={handleSubmit} softSubmit={softSubmit} />
                )}
              </>
            )}

            {showFinish && <FinishContent />}
          </div>
        ) : (
          <Container>
            {!showFinish && (
              <div className={styles['get-pricing_content']}>
                <div className={styles['get-pricing_content-row']}>
                  <IntroduceContent />

                  <div style={{ flexGrow: '1' }}>
                    <FormContent onFinish={handleSubmit} softSubmit={softSubmit} />
                  </div>
                </div>
              </div>
            )}

            {showFinish && <FinishContent />}
          </Container>
        )}
      </div>

      <Container className={styles['get-pricing_content']}>{children}</Container>
    </div>
  );
};
