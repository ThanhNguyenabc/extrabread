import { Meta } from '@/models/app_config.model';
import { CTAInnerFooter } from '@/ui/organisms/cta-inner-footer/CTAInnerFooter';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next/types';
import { Seo } from '~/ui/util-components/Seo';
import { getSEOTag } from './api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('home', locale),
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

const HomePage = ({ seoTag }: { seoTag?: Meta }) => {
  const { title, description, keywords, image } = seoTag || {};
  const { t } = useTranslation();
  return (
    <>
      <Seo title={title} description={description} keywords={keywords} imageFeature={image}></Seo>
      <CTAInnerFooter htmlText={t('footer.heading')} bonus={2500} sale={250000} />
    </>
  );
};

export default HomePage;
