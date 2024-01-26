import { Meta } from '@/models/app_config.model';
import { Invoicing } from '@/ui/templates/products/Invoicing';
import { ProductsTemplate } from '@/ui/templates/products/ProductsTemplate';
import { Seo } from '@/ui/util-components/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSEOTag } from './api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('invoicing', locale),
    serverSideTranslations(locale ?? 'en', ['common', 'invoicing']),
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
        <Invoicing />
      </ProductsTemplate>
    </>
  );
};

export default index;
