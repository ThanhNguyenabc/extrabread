import SideHustle from '@/components/elements/about/side_hustle';
import ElevateCardItem from '@/components/elements/elevatebusiness/ElevateCardItem';
import BannerX from '@/components/elements/partner/BannerX';
import Hero from '@/components/ui/hero';
import { ProductData } from '@/constants/products';
import { Meta } from '@/models/app_config.model';
import { CTAInnerFooter } from '@/ui/organisms/cta-inner-footer/CTAInnerFooter';
import { Seo } from '@/ui/util-components/Seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next/types';
import React from 'react';
import { getSEOTag } from './api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('home', locale),
    serverSideTranslations(locale ?? 'en', ['common', 'home']),
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

  return (
    <>
      <Seo title={title} description={description} keywords={keywords} imageFeature={image}></Seo>
      <BannerX
        leftCmpClassName="w-full items-center"
        headingClassName="text-center md:max-w-[700px] xl:max-w-[980px]"
        heading={<>Elevate your Business with ExtraBread</>}
        desc="Explore our range of cutting-edge point of sale systems and discover how we're revolutionizing the way businesses operate "
      />
      <div className="bg-neutral-100">
        <Hero className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 lg:grid-cols-3">
          {ProductData.map((item, index) => (
            <ElevateCardItem key={`elevate-card-item${index}`} {...item} />
          ))}
        </Hero>
      </div>
      <SideHustle />
      <CTAInnerFooter
        htmlText="Discover the perfect point of sale system for your business today!"
        bonus={2500}
        sale={250000}
      />
    </>
  );
};

export default ElevateYourBusiness;
