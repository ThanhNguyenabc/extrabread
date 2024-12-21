import { ProductDetailView } from '@/components/elements/pos-detail/ProductDetail';
import SimilarPOS from '@/components/elements/pos-detail/SimilarPOS';
import Hero from '@/components/ui/hero';
import useLocale from '@/hooks/useLocale';
import { MetaTag } from '@/models/bestpos/app_configs';
import { ProductDetail } from '@/models/bestpos/product-detail.model';
import { Seo } from '@/ui/util-components/Seo';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSEOTagByProduct } from '../api/configs';
import { fetchProductList, getProductDetail } from '../api/products';

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const slug = (params?.['pos'] as string) || '';

  const [productDetail, seoTag, translations] = await Promise.all([
    getProductDetail(slug),
    getSEOTagByProduct(slug),
    serverSideTranslations(locale ?? 'en', ['common', 'equipment', 'pos-detail', 'pos_systems']),
  ]);

  if (!productDetail) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...translations,
      productDetail,
      seoTag: seoTag || {},
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProductList();
  const paths = products.flatMap(item => {
    return ['en', 'es'].map(locale => ({
      params: {
        pos: item.slug,
      },
      locale,
    }));
  });
  console.log('paths:::::', paths);
  return {
    paths,
    fallback: true,
  };
};

const POSDetail = ({
  productDetail,
  seoTag,
}: {
  productDetail: ProductDetail;
  seoTag?: MetaTag;
}) => {
  const { locale } = useLocale();

  const { title = '', description = '', image = '' } = seoTag || {};
  return (
    <>
      <Seo title={title?.[locale]} description={description?.[locale]} imageFeature={image} />
      <Hero>
        <ProductDetailView productData={productDetail} />
      </Hero>
      <SimilarPOS />
    </>
  );
};

export default POSDetail;
