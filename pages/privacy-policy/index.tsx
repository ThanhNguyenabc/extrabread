import { Seo } from '@/ui/util-components/Seo';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PrivacyPolicy } from '~/ui/templates/secondary/PrivacyPolicy';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const index = () => {
  const { t } = useTranslation('common');
  const title = t('privacy.title');
  const description = t('privacy.description');
  const tags = t('privacy.tags');
  const thumbnail = t('privacy.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <PrivacyPolicy />
    </>
  );
};

export default index;
