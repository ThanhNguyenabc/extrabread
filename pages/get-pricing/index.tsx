import { Meta } from '@/models/app_config.model';
import { Seo } from '@/ui/util-components/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetPricingTemplate } from '~/ui/templates/get-pricing/GetPricing';
import { getSEOTag } from '../api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('get-pricing', locale),
    serverSideTranslations(locale ?? 'en', ['common', 'questionnaire']),
  ]);
  return {
    props: {
      seoTag,
      ...translation,
    },
    revalidate: 120,
  };
};

const index = ({ seoTag }: { seoTag?: Meta }) => {
  const { title, description, keywords, image } = seoTag || {};

  return (
    <>
      <Seo title={title} description={description} keywords={keywords} imageFeature={image} />
      <GetPricingTemplate />
    </>
  );
};

export default index;
