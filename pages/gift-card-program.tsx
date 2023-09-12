import { GiftCardProgram } from '@/ui/templates/products/GiftCardProgram';
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
  const title = t('giftCardProgram.title');
  const description = t('giftCardProgram.description');
  const tags = t('giftCardProgram.tags');
  const thumbnail = t('giftCardProgram.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <ProductsTemplate>
        <GiftCardProgram />
      </ProductsTemplate>
    </>
  );
};

export default index;
