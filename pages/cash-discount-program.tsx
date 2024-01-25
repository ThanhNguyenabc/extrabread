import { Meta } from '@/models/app_config.model';
import { CashDiscountProgram } from '@/ui/templates/products/CashDiscountProgram';
import { ProductsTemplate } from '@/ui/templates/products/ProductsTemplate';
import { Seo } from '@/ui/util-components/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSEOTag } from './api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('cash-discount-program', locale),
    serverSideTranslations(locale ?? 'en', ['common', 'cash_discount']),
  ]);
  return {
    props: {
      seoTag,
      ...translation,
    },
    revalidate: 120,
  };
};

const index = ({ seoTag }: { seoTag?: Meta }) => {
  const { title, description, keywords, image } = seoTag || {};

  return (
    <>
      <Seo title={title} description={description} keywords={keywords} imageFeature={image} />
      <ProductsTemplate>
        <CashDiscountProgram />
      </ProductsTemplate>
    </>
  );
};

export default index;
