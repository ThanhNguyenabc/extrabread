import SideHustle from '@/components/elements/about/side_hustle';
import BannerX from '@/components/elements/partner/BannerX';
import { Button } from '@/components/ui/button';
import Hero from '@/components/ui/hero';
import InfoSection, { ImageDirection } from '@/components/ui/info_section';
import {
  AboutBanner,
  PosSytem,
  ProcessingFee,
  SigningBonus,
} from '@/ui/img-resource/ImageResources';
import { CTAInnerFooter } from '@/ui/organisms/cta-inner-footer/CTAInnerFooter';
import Image from 'next/image';
import React from 'react';

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
    image: ProcessingFee,
    imageDirection: 'right',
    title: 'Zero Processing Fees',
    desc: 'Let us help you choose the right receipt layout for your business. Our agents can even work with your current POS company in helping implement the cash discount program.',
  },
  {
    image: SigningBonus,
    imageDirection: 'left',
    title: 'Cash Signing Bonus',
    desc: 'Provides your business with the necessary funding and flexibility to expand operations or weather difficult times with your staff.',
  },
  {
    image: PosSytem,
    imageDirection: 'right',
    title: 'Premium POS Systems',
    desc: 'Provides your business with the necessary funding and flexibility to expand operations or weather difficult times with your staff.',
  },
];
const AboutUS = () => {
  const onGetStart = () => {};
  return (
    <>
      <BannerX
        leftCmpClassName="w-full items-center"
        headingClassName="text-center md:max-w-[700px] xl:max-w-[980px]"
        heading={
          <>
            <span className="text-green-500 ">Your Growth, Our Priority:</span> Elevate Your
            Business and Say Goodbye to Processing Fees{' '}
          </>
        }
        desc="Discuss services we provide but mostly what we do and why we do for business owners. "
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
              <div className="flex flex-col text-white gap-2 text-center md:gap-4">
                <h3 className="heading-md md:heading-lg">{item.title}</h3>
                <p className="text-sm-semibold md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </Hero>
      </div>
      <div className="bg-neutral-100">
        <Hero className="gap-4 md:flex-row md:gap-8 lg:gap-16">
          <h3 className="heading-xs text-center md:text-start md:heading-lg ">What we do?</h3>
          <div className="flex flex-col gap-4 md:gap-8 md:w-[65%]">
            <p className=" text-sm whitespace-pre-wrap md:text-lg">
              {`ExtraBread is your trusted partners in the world of processing fees and point-of-sale systems.\n \n Our mission is clear: we guide you in finding the best POS system for your business needs when signing up with us to do your payment processing. Along with a point-of-sale system, receive up to possibly $5,000+ in a cash signing bonus. \n\n We're  passionate about helping businesses succeed and want to be there with you every step of the way. Work with ExtraBread today and get more bread with less problems.`}
            </p>
            <Button className=" bg-neutral-900 hover:bg-neutral-900/90" size={'responsive'}>
              Get Started
            </Button>
          </div>
        </Hero>
      </div>
      <div className="flex flex-col pb-10 md:pb-16 lg:pb-20">
        {InfoSections.map(item => {
          return (
            <InfoSection
              className="pb-0 md:pb-0 xl:pb-0"
              dataConfig={{
                ...item,
                infoClassName: 'justify-center',
                ctaConfig: {
                  title: 'Learn more',
                  onClick: () => {},
                  buttonProps: {
                    variant: 'outline',
                    size :"default"
                  },
                },
              }}
              imageDirection={item.imageDirection as ImageDirection}
              image={
                <div className="flex-1">
                  <Image src={item.image} alt={`${item.title}`} quality={90} />
                </div>
              }
            />
          );
        })}
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

export default AboutUS;
