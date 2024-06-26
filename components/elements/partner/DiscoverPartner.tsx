import { Button } from '@/components/ui/button';
import Hero from '@/components/ui/hero';
import { usePartnerContext } from '@/pages/partner';
import { useTranslation } from 'next-i18next';
import React, { useMemo } from 'react';

const DiscoverPartner = () => {
  const { t: common } = useTranslation();
  const { t } = useTranslation('partner');

  const { navigatePartnerForm } = usePartnerContext();
  const referalItems = useMemo(() => {
    return t('referal_items', { returnObjects: true }) as Array<{ title: string; desc: string }>;
  }, [t]);

  return (
    <Hero className="gap-8 lg:gap-12 items-center overflow-hidden">
      <div className="md:max-w-[784px] self-center">
        <h3 className="mt-2 mb-8 heading-xs md:text-center md:heading-lg">
          {t('referal_program')}
        </h3>
        <p className="mt-6 text-base text-neutral-700  md:text-lg md:mt-12">
          {t('referal_program_desc')}
        </p>
      </div>
      <div className="flex flex-row gap-4 lg:gap-8 w-full overflow-auto">
        {Array.isArray(referalItems) &&
          referalItems.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col min-w-[200px] bg-gradient-to-b from-green-100 to-white rounded-2xl p-4 gap-4 md:w-[300px] md:p-6 md:gap-6"
            >
              <h4 className="text-lg-semibold md:text-2xl md:font-extrabold"> {item.title}</h4>
              <p className="flex-1 text-neutral-700">{item.desc}</p>
              <span className="stroke-text text-[100px] self-end font-bold text-5xl lg:text-[120px] bg-clip-text text-white  bg-gradient-to-b  from-green-500 to-[#CDE762]">
                0{index + 1}
              </span>
            </div>
          ))}
      </div>

      <p className="md:max-w-[784px] md:text-center  md:text-lg text-neutral-600">
        {t('referal_program_desc1')}
      </p>
      <Button onClick={navigatePartnerForm} size={'responsive'}>
        {common('join_extrbread')}
      </Button>
    </Hero>
  );
};

export default DiscoverPartner;
