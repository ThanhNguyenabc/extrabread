import SideHustle from '@/components/elements/about/side_hustle';
import ElevateCardItem from '@/components/elements/elevatebusiness/ElevateCardItem';
import BannerX from '@/components/elements/partner/BannerX';
import Hero from '@/components/ui/hero';
import { ProductConfigs } from '@/constants/products';
import { Meta } from '@/models/app_config.model';
import { Product } from '@/models/product.model';
import { CTAInnerFooter } from '@/ui/organisms/cta-inner-footer/CTAInnerFooter';
import { Seo } from '@/ui/util-components/Seo';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next/types';
import React, { useMemo } from 'react';
import { getSEOTag } from './api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('point-of-sale-systems', locale),
    serverSideTranslations(locale ?? 'en', ['common', 'sale_systems', 'products']),
  ]);
  return {
    props: {
      seoTag,
      ...translation,
    },
    revalidate: 120,
  };
};

const ElevateYourBusiness = ({ seoTag }: { seoTag?: Meta }) => {
  const { title, description, keywords, image } = seoTag || {};
  const { t } = useTranslation();

  const Products = useMemo(() => {
    return (
      t('items', {
        returnObjects: true,
        ns: 'products',
      }) as Product[]
    ).map(item => ({
      ...item,
      ...ProductConfigs[item.id],
    }));
  }, [t]);

  return (
    <>
      <Seo title={title} description={description} keywords={keywords} imageFeature={image}></Seo>
      <BannerX
        leftCmpClassName="w-full items-center"
        headingClassName="text-center md:max-w-[700px] xl:max-w-[980px]"
        heading={t('heading', { ns: 'sale_systems' })}
        desc={t('desc', { ns: 'sale_systems' })}
      />
      <div className="bg-neutral-100">
        <Hero className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 lg:grid-cols-3">
          {Products.map((item, index) => (
            <ElevateCardItem key={`elevate-card-item${index}`} {...item} />
          ))}
        </Hero>
      </div>
      <SideHustle />
      <CTAInnerFooter htmlText={t('footer.heading')} bonus={2500} sale={250000} />
    </>
  );
};

export default ElevateYourBusiness;
