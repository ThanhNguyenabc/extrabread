import { CheckServices } from '@/ui/templates/products/CheckServices';
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
  const title = t('checkService.title');
  const description = t('checkService.description');
  const tags = t('checkService.tags');
  const thumbnail = t('checkService.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <ProductsTemplate>
        <CheckServices />
      </ProductsTemplate>
    </>
  );
};

export default index;
