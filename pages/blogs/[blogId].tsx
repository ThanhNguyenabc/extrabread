import { BlogDetail } from '@/ui/templates/blogs/blog-detail/BlogDetail';
import { useTranslation } from 'next-i18next';
import { Seo } from '~/ui/util-components/Seo';

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
