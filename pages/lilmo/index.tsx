import { Lilmo } from '@/ui/templates/lilmo/Lilmo';
import { Seo } from '@/ui/util-components/Seo';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const index = () => {
  const { t } = useTranslation('common');
  const title = t('lilmo.title');
  const description = t('lilmo.description');
  const tags = t('lilmo.tags');
  const thumbnail = t('lilmo.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <Lilmo />
    </>
  );
};

export default index;
