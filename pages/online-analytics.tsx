import { OnlineReporting } from '@/ui/templates/products/OnlineReporting';
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
  const title = t('onlineAnalytics.title');
  const description = t('onlineAnalytics.description');
  const tags = t('onlineAnalytics.tags');
  const thumbnail = t('onlineAnalytics.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <ProductsTemplate>
        <OnlineReporting />
      </ProductsTemplate>
    </>
  );
};

export default index;
