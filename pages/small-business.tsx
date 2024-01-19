import { Meta } from '@/models/app_config.model';
import { BusinessTypesTemplate } from '@/ui/templates/business-types/BusinessTypesTemplate';
import { SmallBusiness } from '@/ui/templates/business-types/SmallBusiness';
import { Seo } from '@/ui/util-components/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSEOTag } from './api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('small-business', locale),
    serverSideTranslations(locale ?? 'en', ['common', 'small_business']),
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
        <SmallBusiness />
      </BusinessTypesTemplate>
    </>
  );
};

export default index;
