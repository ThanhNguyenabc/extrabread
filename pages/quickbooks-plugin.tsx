import { ProductsTemplate } from '@/ui/templates/products/ProductsTemplate';
import { QuickBooksPlugin } from '@/ui/templates/products/QuickBooksPlugin';
import { Seo } from '@/ui/util-components/Seo';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['product'])),
  },
});

const index = () => {
  const { t } = useTranslation('product');
  const title = t('quickbooks.title');
  const description = t('quickbooks.description');
  const tags = t('quickbooks.tags');
  const thumbnail = t('quickbooks.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <ProductsTemplate>
        <QuickBooksPlugin />
      </ProductsTemplate>
    </>
  );
};

export default index;
