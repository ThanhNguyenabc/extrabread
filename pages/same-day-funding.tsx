import Funding from '@/components/elements/funding/Funding';
import { Meta } from '@/models/app_config.model';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next/types';
import { Seo } from '~/ui/util-components/Seo';
import { getSEOTag } from './api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('home', locale),
    serverSideTranslations(locale ?? 'en', ['common' , "funding"]),
  ]);
  return {
    props: {
      seoTag,
      ...translation,
    },
    revalidate: 120,
  };
};

const SameDayFundingPage = ({ seoTag }: { seoTag?: Meta }) => {
  const { title, description, keywords, image } = seoTag || {};
  return (
    <>
      <Seo title={title} description={description} keywords={keywords} imageFeature={image}></Seo>
      <Funding />
    </>
  );
};

export default SameDayFundingPage;
