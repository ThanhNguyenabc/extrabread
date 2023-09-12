import { CashDiscountProgram } from '@/ui/templates/products/CashDiscountProgram';
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
  const title = t('cashDiscount.title');
  const description = t('cashDiscount.description');
  const tags = t('cashDiscount.tags');
  const thumbnail = t('cashDiscount.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <ProductsTemplate>
        <CashDiscountProgram />
      </ProductsTemplate>
    </>
  );
};

export default index;
