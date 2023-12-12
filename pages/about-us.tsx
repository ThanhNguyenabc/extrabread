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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next/types';
import React from 'react';
import { getSEOTag } from './api/app-configs';
const DataStatistics = [
  {
    title: '$100K',
    desc: 'Earn up to $100K with a cash signing bonus',
  },
  {
    title: '30+',
    desc: 'Over 30+ years of experience in the field',
  },
  {
    title: '500',
    desc: 'Taking pride with over 500 happy clients',
  },
  {
    title: '20+',
    desc: 'Choose from our wide range of 20+ POS systems',
  },
];

const InfoSections = [
  {
    image: PosSytem,
    imageDirection: 'right',
    title: 'Point of Sale Solutions',
    ctaConfig: {
      title: 'Explore POS equipments',
      href: RouteConfig.SaleSystems,
    },
    desc: "We offer expert consultation and a comprehensive review of your business's specifics to pinpoint the most suitable POS systems that align seamlessly with your operational requirements. Our extensive network includes partnerships with 20+ industry-leading POS systems, giving us the versatility to present you with options. Plus, we offer POS solutions starting at a low cost of $0.  Learn more about the partners we work with.",
  },
  {
    image: ProcessingFee,
    imageDirection: 'left',
    title: 'Payment Processing Solutions',
    ctaConfig: {
      title: 'Payment Processing',
      href: RouteConfig.PaymentProcessing,
    },
    desc: 'We offer tailored payment processing solutions for business types.  Current solutions can be complex and eat into your profits with costly fees - with us, you can reduce your fees to $0 & leave it to us to handle the whole setup. Make it easy for yourself and for your customers in accepting cc payments.  Make the switch today for smooth, affordable payment processing.  Ask about our Cash Discount Program.',
  },
  {
    image: Support,
    imageDirection: 'right',
    title: 'Seamless Installation and 24/7 Support',
    ctaConfig: {
      title: 'Get Started',
      href: RouteConfig.Contacts,
    },
    desc: "We've got your back, 24/7. When you sign up with us, we handle all the logistics, including rolling up our sleeves if necessary. Additionally, we're at your service for any challenges that may arise. We understand the frustration that a faulty POS or payment terminal can bring to your business and well-being. But worry not, we're here to take care of it from day one. Add ExtraBread to your team to seamlessly manage your merchant service needs.",
  },
  {
    image: SigningBonus,
    imageDirection: 'left',
    title: 'Cash Signing Bonus',
    ctaConfig: {
      title: 'Get Pricing',
      href: RouteConfig.GetPricing,
    },
    desc: "While our services already come with fantastic incentives and savings, the benefits don't stop there. At Extrabread, we go the extra mile by offering a generous cash signing bonus of up to $100k. No strings attached, no interests, contracts, or hidden fees involved. It's our way of expressing gratitude for welcoming you into our Extrabread family. Take the first step and get started now to discover all that awaits you. Get started now to learn more.",
  },
];

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('about-us', locale),
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

const AboutUS = ({ seoTag }: { seoTag?: Meta }) => {
  const { title, description, keywords, image } = seoTag || {};

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
        heading={
          <>
            <span className="text-green-500 ">From Consultation to Installation</span>, We Are Your
            One Stop Shop For All Things Merchant Services.
          </>
        }
        desc="We consult and set your business up with the best POS and Payment Processing Solutions."
        button={{
          title: 'Get Started',
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
                <p className="text-sm-semibold md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </Hero>
      </div>

      <div className="bg-neutral-100">
        <Hero className="gap-4 md:flex-row md:gap-8 lg:gap-16">
          <h3 className="heading-xs text-center md:text-start md:heading-lg ">A bit about us</h3>
          <div className="flex flex-col gap-4 md:gap-8 md:w-[65%]">
            <p className=" text-sm whitespace-pre-wrap md:text-lg">
              {`Extrabread is your one-stop-shop for comprehensive Point of Sale and credit card processing solutions. Our unique strength lies in our partnerships with top-tier POS and CC processing providers, which enables us to offer tailor-made packages with unmatched flexibility.
              \nWe're not the 'set it and forget it' type – we're here to provide 24/7 support, ensuring a smooth installation process and addressing any issues you encounter along the way. 
              \nWith over two decades of industry experience, we've weathered the storms and celebrated the successes alongside countless business owners. Count on us to stand by your side every step of the way. Ready to simplify your payment solutions? Get started with a free consultation today.`}
            </p>
            <Button
              className=" bg-neutral-900 hover:bg-neutral-900/90"
              size={'responsive'}
              onClick={onGetStart}
            >
              Get Started
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
                infoClassName: 'flex-1 justify-center lg:p-7',
                ctaConfig: {
                  title: item.ctaConfig.title,
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

      <CTAInnerFooter
        htmlText="Discover the perfect point of sale system for your business today!"
        bonus={2500}
        sale={250000}
      />
    </>
  );
};

export default AboutUS;
