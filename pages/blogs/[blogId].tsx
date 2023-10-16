import { BlogDetail } from '@/ui/templates/blogs/blog-detail/BlogDetail';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Seo } from '~/ui/util-components/Seo';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};

export async function getStaticPaths() {
  // Fetch the list of blogIds dynamically from your data source
  // For example, you can query a database or an API to get the list of available blogIds
  // const blogs = await fetch(BLOGS_API).then(response => response.json());
  // const blogIds = blogs.map(el => el.slug);
  // // Generate an array of objects containing the `params` key
  // const paths = blogIds.map(blogId => ({ params: { blogId } }));

  return {
    paths: [],
    fallback: false, // Or 'blocking' or true based on your requirements
  };
}

const Blog = () => {
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

export default Blog;
