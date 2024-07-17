import { submitGetPricing } from '@/apis';
import { mapModifiers } from '@/helpers';
import { message } from 'antd';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useDevice } from '~/hooks/useDetectMobile';
import { Container } from '~/ui/atoms/container/Container';
import { FormContent } from './FormContent';
import styles from './GetPricing.module.scss';
import { IntroduceContent } from './IntroduceContent';
import { FinishContent } from './components/finish-content/FinishContent';
import { FormValue } from './types';

let currentStep = 1;

type Props = PropsWithChildren & {
  type?: 'default' | 'lilmo';
};

export const GetPricingTemplate: FC<Props> = ({ type = 'default', children }) => {
  const { isMobile } = useDevice();
  const [step, setStep] = useState(0);
  const [showFinish, setShowFinish] = useState(false);

  useEffect(() => {
    window.dataLayer?.push({ event: 'getpricing_business_type' });
  }, []);

  const softSubmit = async (formValues: FormValue, sendMailToCustomer = true) => {
    try {
      await submitGetPricing(formValues, window.location.href, sendMailToCustomer);
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
    window.dataLayer?.push({ event: 'getpricing_fullinfo' });
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
