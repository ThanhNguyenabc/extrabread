import { LoyaltyRewards } from '@/ui/templates/products/LoyaltyRewards';
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
  const title = t('customerLoyalPrograms.title');
  const description = t('customerLoyalPrograms.description');
  const tags = t('customerLoyalPrograms.tags');
  const thumbnail = t('customerLoyalPrograms.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <ProductsTemplate>
        <LoyaltyRewards />
      </ProductsTemplate>
    </>
  );
};

export default index;
