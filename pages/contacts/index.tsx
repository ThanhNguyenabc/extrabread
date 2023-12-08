import { Meta } from '@/models/app_config.model';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Contact } from '~/ui/templates/secondary/Contact';
import { Seo } from '~/ui/util-components/Seo';
import { getSEOTag } from '../api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('support', locale),
    serverSideTranslations(locale ?? 'en', ['common']),
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
      <Contact />
    </>
  );
};

export default index;
