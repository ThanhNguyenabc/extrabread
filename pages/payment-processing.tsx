import PaymentProcessing from '@/components/elements/paymentprocessing/PaymentProcessing';
import { Meta } from '@/models/app_config.model';
import { Seo } from '@/ui/util-components/Seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next/types';
import React from 'react';
import { getSEOTag } from './api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('payment-processing', locale),
    serverSideTranslations(locale ?? 'en', ['common', 'payment_processing']),
  ]);
  return {
    props: {
      seoTag,
      ...translation,
    },
    revalidate: 120,
  };
};

const Index = ({ seoTag }: { seoTag?: Meta }) => {
  const { title, description, keywords, image } = seoTag || {};

  return (
    <>
      <Seo title={title} description={description} keywords={keywords} imageFeature={image}></Seo>
      <PaymentProcessing />
    </>
  );
};

export default Index;
