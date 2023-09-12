import { BlogsTemplate } from '@/ui/templates/blogs/Blogs';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Seo } from '~/ui/util-components/Seo';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale ?? 'en', ['common'])) },
  };
};

const index = () => {
  const { t } = useTranslation('common');
  const title = t('home.title');
  const description = t('home.description');
  const tags = t('home.tags');
  const thumbnail = t('home.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <BlogsTemplate />
    </>
  );
};

export default index;
