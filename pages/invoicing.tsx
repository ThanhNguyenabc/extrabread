import { Invoicing } from '@/ui/templates/products/Invoicing';
import { ProductsTemplate } from '@/ui/templates/products/ProductsTemplate';
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
  const title = t('invoicing.title');
  const description = t('invoicing.description');
  const tags = t('invoicing.tags');
  const thumbnail = t('invoicing.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <ProductsTemplate>
        <Invoicing />
      </ProductsTemplate>
    </>
  );
};

export default index;
