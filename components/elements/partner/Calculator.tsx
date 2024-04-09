import ReferalProgramModal, {
  ReferalProgramType,
} from '@/components/elements/partner/referral/ReferalProgramModal';
import { Button } from '@/components/ui/button';
import Hero from '@/components/ui/hero';
import { usePartnerContext } from '@/pages/partner';
import { EarningCash, ReferringBusiness } from '@/ui/img-resource/ImageResources';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React, { useRef } from 'react';

const CalculatorItem = ({
  className,
  onClick,
  title,
  desc,
  btnTitle,
  image,
  btnClassName,
}: {
  className?: string;
  onClick: () => void;
  title: string;
  desc: string;
  image: string;
  btnTitle?: string;
  btnClassName?: string;
}) => {
  const { t: common } = useTranslation('common');
  return (
    <div className={clsx('flex flex-col rounded-2xl', className)}>
      <div className="flex-1 flex flex-col gap-8 p-8 md:p-10 md:gap-10">
        <div className=" relative w-20 h-20 md:w-40 md:h-40">
          <Image src={image} alt={title} fill />
        </div>
        <h3 className="heading-xs md:heading-lg lg:text-start">{title}</h3>
        <p className="md:text-lg flex-1">{desc}</p>
        <Button onClick={onClick} size={'responsive'} className={clsx(btnClassName)}>
          {btnTitle ?? common('join_extrbread')}
        </Button>
      </div>
    </div>
  );
};

const Calculator = () => {
  const { t: common } = useTranslation('common');
  const { t } = useTranslation('partner');
  const { navigatePartnerForm } = usePartnerContext();
  const referalProgramRef = useRef<ReferalProgramType>(null);

  return (
    <Hero className="flex flex-col gap-6 md:gap-8 lg:flex-row">
      <CalculatorItem
        className="bg-green-500 text-white"
        title={t('earning_title')}
        desc={t('earning_desc')}
        btnClassName="bg-neutral-900"
        image={EarningCash.src}
        onClick={navigatePartnerForm}
      />
      <CalculatorItem
        className="bg-neutral-200"
        title={t('start_business_title')}
        desc={t('start_business_desc')}
        btnTitle={common('get_start_today')}
        btnClassName="bg-blue-500"
        image={ReferringBusiness.src}
        onClick={() => referalProgramRef.current?.showDialog()}
      />
      <ReferalProgramModal ref={referalProgramRef} />
    </Hero>
  );
};

export default Calculator;
