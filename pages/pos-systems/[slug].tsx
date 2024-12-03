import { BUSINESS_MENU } from '@/constants';
import { MetaTag } from '@/models/bestpos/app_configs';
import { Product } from '@/models/bestpos/product.model';
import { getSEOTagByBusinessType } from '@/pages/api/configs';
import POSSystems from 'components/elements/POSSytems';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { fetchProductList } from 'pages/api/products';
import React from 'react';

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug as string;
  const locale = context.locale || 'en';
  const [products, seoTag, translations] = await Promise.all([
    fetchProductList({ type: slug }),
    getSEOTagByBusinessType(slug),
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

export async function getStaticPaths() {
  const paths = BUSINESS_MENU.map(item => ({
    params: {
      slug: item.type,
    },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

const POSSystemPage = ({
  seoTag,
  products,
}: {
  seoTag: MetaTag;
  type?: string;
  products: Array<Product>;
}) => {
  return <POSSystems data={products} seoTag={seoTag} />;
};

export default POSSystemPage;
