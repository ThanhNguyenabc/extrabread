import { EMAIL, PHONE } from '@/constants';
import { IcMail, IcPhone } from '@/ui/img-resource/ExIcon';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ThanksYouFormProps {
  title?: string;
  eventName?: string;
  className?: string;
}
const ThanksYouForm = ({ title, className }: ThanksYouFormProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={twMerge(
        'flex flex-col max-w-[500px] mx-auto items-center justify-center gap-4 text-center',
        className,
      )}
    >
      <div className="w-10 h-10 flex bg-success btn-circle justify-center items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.54988 11.5749C5.41655 11.5749 5.29155 11.5539 5.17488 11.5119C5.05821 11.4706 4.94988 11.3999 4.84988 11.2999L0.549879 6.9999C0.366545 6.81657 0.278879 6.5789 0.286879 6.2869C0.295545 5.99557 0.391545 5.75824 0.574878 5.5749C0.758212 5.39157 0.991545 5.2999 1.27488 5.2999C1.55821 5.2999 1.79155 5.39157 1.97488 5.5749L5.54988 9.1499L14.0249 0.674902C14.2082 0.491569 14.4459 0.399902 14.7379 0.399902C15.0292 0.399902 15.2665 0.491569 15.4499 0.674902C15.6332 0.858236 15.7249 1.09557 15.7249 1.3869C15.7249 1.6789 15.6332 1.91657 15.4499 2.0999L6.24988 11.2999C6.14988 11.3999 6.04155 11.4706 5.92488 11.5119C5.80821 11.5539 5.68321 11.5749 5.54988 11.5749Z"
            fill="white"
          />
        </svg>
      </div>
      <p className="txt-heading-xsmal">{t(title || 'thank_you_form_title')}</p>
      <p className="txt-md  text-neutral-700 md:text-xl">{t('thank_you_form_desc')}</p>
      <p className="txt-md  text-neutral-700 mt-7">{t('thank_you_form_message')}</p>
      <div className="flex flex-row txt-sm font-medium gap-4">
        <div className="flex flex-row items-center gap-3">
          <IcPhone className=" text-[20px]" />
          <p className="txt-sm-link font-medium">{PHONE}</p>
        </div>
        <p className="tx-md text-neutral-700">{t('or')}</p>
        <div className="flex flex-row items-center gap-3">
          <IcMail className=" text-[20px]" />
          <p className="txt-sm-link font-medium">{EMAIL}</p>
        </div>
      </div>
    </div>
  );
};

export default ThanksYouForm;
