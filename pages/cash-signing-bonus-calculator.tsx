import CashBonusCalculator from '@/components/elements/cash-bonus-calculator/CashBonusCalculator';
import CashBonusInput from '@/components/elements/cash-bonus-calculator/CashBonusInput';
import FundingForm, { FundingFormHandle } from '@/components/elements/funding/FundingForm';
import { Meta } from '@/models/app_config.model';
import { BreadCard } from '@/ui/atoms/bread-card/BreadCard';
import { AllBusinesses } from '@/ui/organisms/all-businesses/AllBusinesses';
import { SolutionList } from '@/ui/templates/home/components/SolutionList';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next/types';
import { useRef } from 'react';
import { Seo } from '~/ui/util-components/Seo';
import { getSEOTag } from './api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('home', locale),
    serverSideTranslations(locale ?? 'en', ['common', 'funding']),
  ]);
  return {
    props: {
      seoTag,
      ...translation,
    },
    revalidate: 120,
  };
};

const Page = ({ seoTag }: { seoTag?: Meta }) => {
  const { title, description, keywords, image } = seoTag || {};
  const { t: common } = useTranslation();
  const formRef = useRef<FundingFormHandle>(null);

  const openForm = () => {
    formRef.current?.showDialog();
  };

  return (
    <>
      <Seo title={title} description={description} keywords={keywords} imageFeature={image}></Seo>
      <CashBonusCalculator>
        <CashBonusInput onClick={openForm} />
      </CashBonusCalculator>
      <SolutionList />
      <BreadCard>
        <AllBusinesses heading={common('point_of_sale.heading')} />
      </BreadCard>
      <FundingForm ref={formRef} />
    </>
  );
};

export default Page;
