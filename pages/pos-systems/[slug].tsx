import POSSystems from "components/elements/POSSytems";
import { MetaTag } from "models/app_configs";
import { Product } from "models/product.model";
import { GetStaticPropsContext } from "next";
import { getSEOTagByBusinessType } from "pages/api/configs";
import { fetchProductList } from "pages/api/products";
import React from "react";
import { CategoryList } from "utils/routes";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug as string;
  const data = await Promise.all([
    fetchProductList({ type: slug }),
    getSEOTagByBusinessType(slug),
  ]);
  return {
    props: {
      products: JSON.parse(JSON.stringify(data?.[0] || [])),
      seoTag: data?.[1],
    },
    revalidate: 60,
  };
};

export async function getStaticPaths() {
  const paths = CategoryList.map((item) => ({
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
