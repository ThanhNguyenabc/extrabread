import { CashAdvance } from '@/ui/templates/products/CashAdvance';
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
  const title = t('cashAdvance.title');
  const description = t('cashAdvance.description');
  const tags = t('cashAdvance.tags');
  const thumbnail = t('cashAdvance.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <ProductsTemplate>
        <CashAdvance />
      </ProductsTemplate>
    </>
  );
};

export default index;
