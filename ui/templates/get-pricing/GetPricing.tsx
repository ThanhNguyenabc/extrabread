import { submitForm } from '@/apis';
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

  const softSubmit = async (formValues: FormValue, sendMailToCustomer = true) => {
    try {
      if (currentStep === 1) {
        leadsId = nanoid();
      }

      const mailHtmlBody = `<!DOCTYPE html>
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
            <li><strong>What type of business?</strong> ${formValues.typeBusiness}</li>
            <li><strong>What are you looking for?</strong> ${formValues.lookingFor}</li>
            <li><strong>Cash signing bonus:</strong> ${formValues.cashBonus ? 'Yes' : 'No'}</li>
            <li><strong>How many stations are you looking for?</strong> ${
              formValues.stationsLookingFor
            }</li>
            <li><strong>Personal name:</strong> ${formValues.name}</li>
            <li><strong>Business name:</strong> ${formValues.business_name}</li>
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
      </html>`;

      await submitForm({
        conversionFunnel: 'get_pricing',
        refUrl: window.location.href,
        adminHtmlBody: mailHtmlBody,
        sendMailToCustomer: sendMailToCustomer,
        data: {
          'What type of business?': formValues.typeBusiness,
          'What are you looking for?': formValues.lookingFor,
          'Cash signing bonus': formValues.cashBonus ? '1' : '0',
          'How many stations are you looking for?': formValues.stationsLookingFor,
          'Business name': formValues.business_name,
          'Personal name': formValues.name,
          'Phone number': formValues.phone,
          Email: formValues.email,
          Website: formValues.website,
          'How did you hear about us?': formValues.heardAbout,
          'Are you currently on cash discount?': formValues.onCashDiscount,
          'What is your monthly credit card processing volume?': `${formValues.price}k $`,
          'How many locations do you have?': String(formValues.locationsHave),
          'How many stations do you currently have?': formValues.stationsHave,
          'What point-of-sale system are you currently using?': formValues.usingPointOfSale,
        },
        contact: {
          email: formValues.email || '',
          phone: formValues.phone || '',
          firstname: formValues.name || '',
          lastname: '',
          businessName: formValues.business_name,
        },
      });
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
    await softSubmit(formValues, false);
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
