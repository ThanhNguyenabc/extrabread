import POSSystems from "@/omponents/elements/POSSytems";
import { MetaTag } from "models/app_configs";
import { Product } from "models/product.model";
import { getSEOTagByBusinessType } from "pages/api/configs";
import { fetchProductList } from "pages/api/products";
import React from "react";

export const getStaticProps = async () => {
  const data = await Promise.all([
    fetchProductList( ),
    getSEOTagByBusinessType("popular"),
  ]);
  return {
    props: {
      products: JSON.parse(JSON.stringify(data?.[0] || [])),
      seoTag: data?.[1],
    },
    revalidate: 60,
  };
};

const index = ({
  seoTag,
  products,
}: {
  seoTag: MetaTag;
  products: Array<Product>;
}) => {
  return <POSSystems data={products} seoTag={seoTag} />;
};

export default index;
