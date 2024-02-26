import { Meta } from '@/models/app_config.model';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Faqs } from '~/ui/templates/secondary/Faqs';
import { Seo } from '~/ui/util-components/Seo';
import { getSEOTag } from '../api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('faq', locale),
    serverSideTranslations(locale, ['common', 'faq', 'cash_discount_faqs']),
  ]);

  const initialI18nStore = translation._nextI18Next?.initialI18nStore;
  const data = initialI18nStore[locale];
  data['faq']['cash_discount_faqs'] = data['cash_discount_faqs']['cash_discount_faqs'];
  delete data['cash_discount_faqs'];

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
      <Faqs />
    </>
  );
};

export default index;
