import useLocale from '@/hooks/useLocale';
import Attribute from 'models/bestpos/attribute';
import { useTranslation } from 'next-i18next';
import React from 'react';

const PaymentProcessing = ({ desc }: { desc?: Attribute }) => {
  const { t } = useTranslation('pos-detail');
  const { locale } = useLocale();
  return (
    <div  className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-3">
      <p className="txt-heading-xsmal col-span-1 md:txt-heading-small">
        {t('paymentProcessing.title')}
      </p>
      <p className="col-span-2 txt-md text-neutral-700 whitespace-pre-line">{desc?.[locale]}</p>
    </div>
  );
};

export default PaymentProcessing;
