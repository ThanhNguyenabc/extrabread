import { getBlogsAPI } from '@/apis/blogs';
import { Meta } from '@/models/app_config.model';
import { BlogDetail } from '@/ui/templates/blogs/blog-detail/BlogDetail';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import { Seo } from '~/ui/util-components/Seo';
import { getSEOTag } from '../api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('blogs', locale),
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

const BlogDetailPage = ({ seoTag }: { seoTag?: Meta }) => {
  const { title, description, keywords, image } = seoTag || {};
  return (
    <>
      <Seo title={title} description={description} keywords={keywords} imageFeature={image} />
      <BlogDetail />
    </>
  );
};

export default BlogDetailPage;
