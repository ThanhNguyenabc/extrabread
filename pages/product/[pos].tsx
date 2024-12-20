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
import { getProductDetail } from '../api/products';

const SlugToKey = {
  revel: 'revel',
  rpower: 'rpower',
  brink: 'brink',
  toast: 'toast',
  aldelo: 'aldelo',
  aloha: 'aloha',
  exatouch: 'exatouch',
  ovvi: 'ovvi',
  lightspeed: 'lightspeed',
  simphony: 'simphony',
  touchbistro: 'touchbistro',
  union: 'union',
  upserve: 'upserve',
  'clover-flex': 'cloverflex',
  'clover-duo': 'clover',
};

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
      seoTag,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: Object.keys(SlugToKey).flatMap(item => {
      return ['en', 'es'].map(locale => ({
        params: {
          pos: item,
        },
        locale,
      }));
    }),
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

  const { title, description, image } = seoTag || {};
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
