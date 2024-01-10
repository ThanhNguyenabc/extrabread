import { Meta } from '@/models/app_config.model';
import { BarNightClubs } from '@/ui/templates/business-types/BarNightClubs';
import { BusinessTypesTemplate } from '@/ui/templates/business-types/BusinessTypesTemplate';
import { Seo } from '@/ui/util-components/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSEOTag } from './api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('bars-and-night-clubs', locale),
    serverSideTranslations(locale ?? 'en', ['common', 'bar_clubs']),
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
      <BusinessTypesTemplate>
        <BarNightClubs />
      </BusinessTypesTemplate>
    </>
  );
};

export default index;
