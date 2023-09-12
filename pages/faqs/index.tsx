import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Faqs } from '~/ui/templates/secondary/Faqs';
import { Seo } from '~/ui/util-components/Seo';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const index = () => {
  const { t } = useTranslation('common');
  const title = t('faq.title');
  const description = t('faq.description');
  const tags = t('faq.tags');
  const thumbnail = t('faq.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <Faqs />
    </>
  );
};

export default index;
