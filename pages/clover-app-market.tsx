import { CloverAppMarket } from '@/ui/templates/products/CloverAppMarket';
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
  const title = t('cloverApp.title');
  const description = t('cloverApp.description');
  const tags = t('cloverApp.tags');
  const thumbnail = t('cloverApp.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <ProductsTemplate>
        <CloverAppMarket />
      </ProductsTemplate>
    </>
  );
};

export default index;
