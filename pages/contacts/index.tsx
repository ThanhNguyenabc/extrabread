import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Contact } from '~/ui/templates/secondary/Contact';
import { Seo } from '~/ui/util-components/Seo';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const index = () => {
  const { t } = useTranslation('common');
  const title = t('support.title');
  const description = t('support.description');
  const tags = t('support.tags');
  const thumbnail = t('support.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <Contact />
    </>
  );
};

export default index;
