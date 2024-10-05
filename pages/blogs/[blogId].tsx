import useTrans from '@/hooks/useTrans';
import { Meta } from '@/models/app_config.model';
import { getSEOTags } from '@/pages/api/configs';
import { BlogDetail } from '@/ui/templates/blogs/blog-detail/BlogDetail';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Seo } from '~/ui/util-components/Seo';

export const getServerSideProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTags('blog'),
    serverSideTranslations(locale ?? 'en', ['common']),
  ]);
  return {
    props: {
      seoTag: seoTag,
      ...translation,
    },
    revalidate: 120,
  };
};

const BlogDetailPage = ({ seoTag }: { seoTag?: Meta }) => {
  const { locale } = useTrans();

  return (
    <>
      <Seo title={seoTag?.title[locale]} description={seoTag?.description[locale]} />
      <BlogDetail />
    </>
  );
};

export default BlogDetailPage;
