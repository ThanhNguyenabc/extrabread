import HeaderWithBack from '@/components/ui/HeaderWithBack';
import useRequestDemoStore from '@/store/request_demo_store';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import React, { forwardRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import BusinessTypes from './BusinessTypes';
import RequestDemoContactForm from './RequestDemoContactForm';
import SystemsQuestion from './SystemsQuestion';

const ThanksYouForm = dynamic(() => import('../ThanksForm'));

interface RequestDemoSectionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
}

const RequestDemoSection = forwardRef<HTMLDivElement, RequestDemoSectionProps>(
  ({ title, className, children, ...props }, ref) => (
    <div ref={ref} className={twMerge(`flex flex-col gap-4`, className)} {...props}>
      <p className="txt-md-bold">{title}</p>
      {children}
    </div>
  ),
);
RequestDemoSection.displayName = 'RequestDemoSection';

interface RequestDemoPOS {
  showCloseButton?: boolean;
  afterSubmit?: () => void;
  onClose?: () => void;
}
const RequestDemoPOS = ({ showCloseButton = true, afterSubmit, onClose }: RequestDemoPOS) => {
  const isSubmittedForm = useRequestDemoStore(store => store.isSubmittedForm);

  const { t } = useTranslation('common');

  const clearStore = useRequestDemoStore(store => store.clearStore);

  useEffect(() => {
    return () => {
      clearStore();
    };
  }, []);

  useEffect(() => {
    if (isSubmittedForm) afterSubmit && afterSubmit();
  }, [isSubmittedForm]);

  return (
    <div className='flex flex-col w-full'>
      <HeaderWithBack
        title={t('request_a_demo')}
        onClose={showCloseButton ? onClose : undefined}
        subTitle={
          !isSubmittedForm ? (
            <p className="txt-sm max-w-xl text-neutral-700 md:text-center md:ml-3">
              We&apos;ll connect you with the POS provider to setup a demo and get the best deal
              possible. Go through BestPOS to get the best deal possible.{' '}
              <span className="font-semibold text-blue-500">Up to 100% off!</span>
            </p>
          ) : (
            <> </>
          )
        }
      />
      {!isSubmittedForm ? (
        <div className="flex w-full flex-col gap-4 mb-4 md:gap-8 lg:gap-10 px-4 py-5 md:px-10">
          <RequestDemoSection title={t('type_of_business')}>
            <BusinessTypes />
          </RequestDemoSection>
          <RequestDemoSection title={'Which POS system are you interested in?'}>
            <SystemsQuestion />
          </RequestDemoSection>
          <RequestDemoSection title={t('contact_detail')}>
            <RequestDemoContactForm />
          </RequestDemoSection>
        </div>
      ) : (
        <ThanksYouForm className="mt-16 lg:mt-[100px]" eventName="request_demo_lead_form" />
      )}
    </div>
  );
};

export default RequestDemoPOS;
