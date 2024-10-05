import useTrans from '@/hooks/useTrans';
import { Meta } from '@/models/app_config.model';
import { getSEOTags } from '@/pages/api/configs';
import { BlogsTemplate } from '@/ui/templates/blogs/Blogs';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Seo } from '~/ui/util-components/Seo';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTags('blog'),
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

const BlogPage = ({ seoTag }: { seoTag?: Meta }) => {
  const { locale } = useTrans();

  return (
    <>
      <Seo title={seoTag?.title[locale]} description={seoTag?.description[locale]} />
      <BlogsTemplate />
    </>
  );
};

export default BlogPage;
