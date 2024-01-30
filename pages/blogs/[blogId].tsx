import { getBlogsAPI } from '@/apis/blogs';
import { BlogDetail } from '@/ui/templates/blogs/blog-detail/BlogDetail';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import { Seo } from '~/ui/util-components/Seo';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
  revalidate: 120,
});

export const getStaticPaths: GetStaticPaths = async () => {
  const links = (await getBlogsAPI()) as Array<any>;

  return {
    paths:
      links?.map(item => ({
        params: {
          blogId: item['slug'],
        },
      })) || [],
    fallback: 'blocking',
  };
};

const BlogDetailPage = () => {
  const { t } = useTranslation('common');
  const title = t('home.title');
  const description = t('home.description');
  const tags = t('home.tags');
  const thumbnail = t('home.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <BlogDetail />
    </>
  );
};

export default BlogDetailPage;
