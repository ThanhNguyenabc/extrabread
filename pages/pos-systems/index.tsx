import POSSystems from '@/components/elements/POSSytems';
import { MetaTag } from '@/models/bestpos/app_configs';
import { Product } from '@/models/bestpos/product.model';
import { getSEOTagByBusinessType } from '@/pages/api/configs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { fetchProductList } from 'pages/api/products';
import React from 'react';

export const getStaticProps = async ({ locale = 'en' }) => {
  const [products, seoTag, translations] = await Promise.all([
    fetchProductList(),
    getSEOTagByBusinessType('popular'),
    serverSideTranslations(locale, ['common', 'pos_systems']),
  ]);
  return {
    props: {
      products: JSON.parse(JSON.stringify(products || [])),
      seoTag,
      ...translations,
    },
    revalidate: 60,
  };
};

const Page = ({ seoTag, products }: { seoTag: MetaTag; products: Array<Product> }) => {
  return <POSSystems data={products} seoTag={seoTag} />;
};

export default Page;
