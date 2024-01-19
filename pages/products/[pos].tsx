import { ProductConfigs } from '@/constants/products';
import { Product } from '@/models/product.model';
import { EquipmentsTemplate } from '@/ui/templates/equipments/EquipmentsTemplate';
import { Seo } from '@/ui/util-components/Seo';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
  const p = (params?.['pos'] as string) || '';

  const posName = SlugToKey[p];
  const detailKey = `${posName}_detail`;

  if (!posName)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };

  const translations = await serverSideTranslations(locale ?? 'en', [
    'common',
    'equipment',
    'products',
    detailKey,
  ]);

  const data = translations._nextI18Next?.initialI18nStore[locale ?? 'en'] || {};
  const productInfor = (data['products']['items'] as Array<Product>).find(
    item => item.id == posName,
  );

  const productDetail = data[detailKey];

  let pos: Product = ProductConfigs[posName];
  pos = {
    ...pos,
    ...productInfor,
    ...productDetail,
  };

  return {
    props: {
      ...translations,
      product: pos,
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

const posEquipment = ({ product }: { product: Product }) => {
  const { t } = useTranslation('equipment');

  const title = t(`${product?.id}.title`);
  const description = t(`${product?.id}.description`);
  const tags = t(`${product?.id}.tags`);
  const thumbnail = t(`${product?.id}.thumbnail`);

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <EquipmentsTemplate data={product} />
    </>
  );
};

export default posEquipment;
