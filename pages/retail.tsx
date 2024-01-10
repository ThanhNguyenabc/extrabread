import { Meta } from '@/models/app_config.model';
import { BusinessTypesTemplate } from '@/ui/templates/business-types/BusinessTypesTemplate';
import { RetailBusinesses } from '@/ui/templates/business-types/RetailBusinesses';
import { Seo } from '@/ui/util-components/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSEOTag } from './api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('retail', locale),
    serverSideTranslations(locale ?? 'en', ['common', 'retail_business']),
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
  const title = seoTag?.title;
  const description = seoTag?.description;
  const tags = seoTag?.keywords;
  const thumbnail = seoTag?.image;
  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <BusinessTypesTemplate>
        <RetailBusinesses />
      </BusinessTypesTemplate>
    </>
  );
};

export default index;
