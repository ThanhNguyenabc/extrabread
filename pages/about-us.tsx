import SideHustle from '@/components/elements/about/side_hustle';
import BannerX from '@/components/elements/partner/BannerX';
import { Button } from '@/components/ui/button';
import Hero from '@/components/ui/hero';
import InfoSection, { ImageDirection } from '@/components/ui/info_section';
import { RouteConfig } from '@/constants';
import { Meta } from '@/models/app_config.model';
import {
  AboutBanner,
  IcChevronRight,
  PosSytem,
  ProcessingFee,
  SigningBonus,
  Support,
} from '@/ui/img-resource/ImageResources';
import { CTAInnerFooter } from '@/ui/organisms/cta-inner-footer/CTAInnerFooter';
import { UniqueValue } from '@/ui/organisms/unique-value/UniqueValue';
import { WorkWithTheBest } from '@/ui/organisms/work-with-the-best/WorkWithTheBest';
import { Seo } from '@/ui/util-components/Seo';
import HTMLReactParser from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next/types';
import React from 'react';
import { getSEOTag } from './api/app-configs';

const DataStatistics = [
  {
    title: '$100K',
    desc: 'earn_with',
  },
  {
    title: '30+',
    desc: 'experience',
  },
  {
    title: '500',
    desc: 'happy_clients',
  },
  {
    title: '20+',
    desc: 'pos_systems',
  },
];

const InfoSections = [
  {
    image: PosSytem,
    imageDirection: 'right',
    title: 'sale_systems.title',
    ctaConfig: {
      title: 'explore_pos',
      href: RouteConfig.SaleSystems,
    },
    desc: 'sale_systems.desc',
  },
  {
    image: ProcessingFee,
    imageDirection: 'left',
    title: 'payment_solutions.title',
    ctaConfig: {
      title: 'payment_processing',
      href: RouteConfig.PaymentProcessing,
    },
    desc: 'payment_solutions.desc',
  },
  {
    image: Support,
    imageDirection: 'right',
    title: '24/7_support.title',
    ctaConfig: {
      title: 'get_started',
      href: RouteConfig.Contacts,
    },
    desc: '24/7_support.,desc',
  },
  {
    image: SigningBonus,
    imageDirection: 'left',
    title: 'signing_bonus.title',
    ctaConfig: {
      title: 'get_pricing',
      href: RouteConfig.GetPricing,
    },
    desc: 'signing_bonus.desc',
  },
];

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('about-us', locale),
    serverSideTranslations(locale ?? 'en', ['common', 'about_us']),
  ]);
  return {
    props: {
      seoTag,
      ...translation,
    },
    revalidate: 120,
  };
};

const AboutUS = ({ seoTag }: { seoTag?: Meta }) => {
  const { title, description, keywords, image } = seoTag || {};
  const { t: common } = useTranslation();
  const { t } = useTranslation('about_us');
  const router = useRouter();

  const onGetStart = () => {
    router.push(`${RouteConfig.GetPricing}`);
  };

  return (
    <>
      <Seo title={title} description={description} keywords={keywords} imageFeature={image}></Seo>
      <BannerX
        leftCmpClassName="w-full items-center"
        headingClassName="text-center md:max-w-[700px] xl:max-w-[1000px]"
        heading={<>{HTMLReactParser(t('heading'))}</>}
        desc={t('desc')}
        button={{
          title: common('get_started'),
          onBtnClick: onGetStart,
        }}
      />

      <div className="relative flex md:h-[400px] lg:h-[600px]">
        <Image
          src={AboutBanner}
          fill
          alt="about-us-banner"
          className=" object-cover"
          quality={100}
        />
        <Hero className=" relative md:h-[400px] lg:h-[600px]">
          <div className="grid gap-6 grid-cols-2 z-10 my-auto md:gap-8 lg:grid-cols-4 lg:px-[]">
            {DataStatistics.map(item => (
              <div
                key={`${item.title}`}
                className="flex flex-col text-white gap-2 text-center md:gap-4"
              >
                <h3 className="heading-md md:heading-lg">{item.title}</h3>
                <p className="text-sm-semibold md:text-base">{t(item.desc)}</p>
              </div>
            ))}
          </div>
        </Hero>
      </div>

      <div className="bg-neutral-100">
        <Hero className="gap-4 md:flex-row md:gap-8 lg:gap-16">
          <h3 className="heading-xs text-center md:text-start md:heading-lg ">
            {t('a_bit_about_us.title')}
          </h3>
          <div className="flex flex-col gap-4 md:gap-8 md:w-[65%]">
            <p className=" text-sm whitespace-pre-wrap md:text-lg">{t('a_bit_about_us.desc')}</p>
            <Button
              className=" bg-neutral-900 hover:bg-neutral-900/90"
              size={'responsive'}
              onClick={onGetStart}
            >
              {common('get_started')}
            </Button>
          </div>
        </Hero>
      </div>

      <div className="flex flex-col pb-10 md:pb-16 lg:pb-20">
        {InfoSections.map(item => {
          return (
            <InfoSection
              key={`${item.title}`}
              className="pb-0 md:pb-0 xl:pb-0"
              dataConfig={{
                ...item,
                title: t(item.title),
                desc: t(item.desc),
                infoClassName: 'flex-1 justify-center lg:p-7',
                ctaConfig: {
                  title: common(item.ctaConfig.title),
                  rightIcon: <IcChevronRight />,
                  ctaClassName: 'flex gap-2',
                  onClick: () => router.push(item.ctaConfig.href),
                  buttonProps: {
                    variant: 'outline',
                    size: 'default',
                  },
                },
              }}
              imageDirection={item.imageDirection as ImageDirection}
              image={
                <div className="w-full flex-1 self-center">
                  <Image src={item.image} alt={`${item.title}`} quality={90} />
                </div>
              }
            />
          );
        })}
      </div>

      <WorkWithTheBest />
      <UniqueValue />
      <SideHustle />

      <CTAInnerFooter htmlText={t('footer.heading')} bonus={2500} sale={250000} />
    </>
  );
};

export default AboutUS;
