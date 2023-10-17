import BannerX from '@/components/elements/partner/BannerX';
import DiscoverPartner from '@/components/elements/partner/DiscoverPartner';
import InfoList from '@/components/elements/partner/InfoList';
import Stories from '@/components/elements/partner/Stories';
import FooterRegisterFrom from '@/components/ui/footer_register_form';
import InfoSection, { ImageDirection } from '@/components/ui/info_section';
import {
  IcAppointment,
  IcBasePay,
  IcBonus,
  IcIncome,
  PartnerBoss,
  PartnerCalling,
  PartnerTeamate,
  PartnerWFH,
} from '@/ui/img-resource/ImageResources';
import { WorkWithTheBest } from '@/ui/organisms/work-with-the-best/WorkWithTheBest';
import Image from 'next/image';
import React, { useRef } from 'react';

const PartnerBenefit = [
  {
    icon: IcBasePay,
    desc: 'Base Pay',
  },
  {
    icon: IcBonus,
    desc: 'Upfront Bonuses',
  },
  {
    icon: IcIncome,
    desc: 'Residual Income',
  },
  {
    icon: IcAppointment,
    desc: 'Preset Appointments ',
  },
];

const PartnerPrograms = [
  {
    title: 'Quick & Easy Cash Flow',
    desc: 'Earn quick and easy money through our referral program by introducing your favorite establishments to ExtraBread. Enjoy residual monthly income for successful referrals and closed deals. Join now to turn your network into a lucrative source of earnings!',
    imageLink: PartnerWFH,
    imageDirection: 'left',
    tagConfig: {
      text: 'Referral Program',
      bgColor: 'bg-yellow-200',
    },
    items: [
      {
        title: 'Lucrative Signing Bonus',
        desc: 'Receive bonuses up to $10,000+ for merchants who use ExtraBread',
      },
      {
        title: 'Virtual Office',
        desc: 'With our virtual office you’ll be able to see your signed referrals, daily & monthly reporting, bonus and residual payouts',
      },
      {
        title: 'Monthly Residual Income',
        desc: 'Receive the most competitive monthly residual income in the market for credit card processing',
      },
      {
        title: 'Competitive Products',
        desc: 'Our competitive products and services put our agents at an advantage to build their portfolio',
      },
    ],
  },
  {
    title: 'Working With The Best',
    desc: 'At ExtraBread, we are committed to excellence and providing unparalleled support to help you achieve your goals. Join our dynamic team and unlock the path to success with the best by your side!',
    imageLink: PartnerTeamate,
    imageDirection: 'right',
    tagConfig: {
      text: 'In-house Agent Program',
      bgColor: 'bg-red-200',
    },
    items: [
      {
        title: 'Lucrative Signing Bonus',
        desc: 'Receive bonuses up to $10,000+ for merchants who use ExtraBread',
      },
      {
        title: 'Consultations',
        desc: 'With your guidance, you are able to offer assistance to merchants of what POS system is best for their business',
      },
      {
        title: 'Experienced Staff',
        desc: 'Work alongside an amazing crew that possesses in-depth knowledge of the ins and outs of the industry',
      },
      {
        title: 'Updated Products',
        desc: 'Work with constantly updated products and services in the point-of-sale industry',
      },
    ],
  },
  {
    title: 'Being Your Own Boss',
    desc: 'Join ExtraBread as an independent sales office agent and embrace the freedom of being your own boss. Empower merchants with expert advice on ideal point-of-sale systems, build long-term relationships, and expand your portfolio alongside us.',
    imageLink: PartnerBoss,
    imageDirection: 'left',
    tagConfig: {
      text: 'Iso Agent Program',
      bgColor: 'bg-green-200',
    },
    items: [
      {
        title: 'Competitive Residual Income',
        desc: 'Receive bonuses up to $10,000+ for merchants who use ExtraBread',
      },
      {
        title: 'Consultations',
        desc: 'With your guidance, you are able to offer assistance to merchants of what POS system is best for their business',
      },
      {
        title: 'Experienced Staff',
        desc: 'Work alongside an amazing crew that possesses in-depth knowledge of the ins and outs of the industry',
      },
      {
        title: 'Competitive Products',
        desc: 'Our competitive products and services put our agents at an advantage to build their portfolio',
      },
    ],
  },
];

const PartnerPage = () => {
  const registerForm = useRef<HTMLDivElement>(null);

  const onJoinExtrabread = () => {
    registerForm?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'end',
    });
  };

  const ctaConfig = {
    title: 'Join ExtraBread Today',
    onClick: onJoinExtrabread,
  };

  return (
    <div className="flex flex-col">
      <BannerX
        tag={'Partnership'}
        heading="The Ultimate Side Hustle"
        desc="Partner with ExtraBread today and start your side hustle journey!"
        image={PartnerCalling}
        button={{
          title: 'Join ExtraBread Today',
          onBtnClick: onJoinExtrabread,
        }}
        leftCmpClassName='lg:justify-between'
        extraComponent={
          <div className="flex gap-3 md:gap-4 lg:mx-auto">
            {PartnerBenefit.map(item => {
              const Icon = item.icon;
              return (
                <div key={`${item.desc}`} className="flex flex-col items-center gap-2">
                  <Icon
                    style={{
                      width: 48,
                      height: 48,
                    }}
                  />
                  <p className="text-center text-sm max-w-[100px]">{item.desc}</p>
                </div>
              );
            })}
          </div>
        }
      />
      <DiscoverPartner />
      <WorkWithTheBest />

      <div className="flex flex-col">
        {PartnerPrograms.map(item => (
          <InfoSection
            key={`${item.title}`}
            {...item}
            
            dataConfig={{
              ...item,
              ctaConfig: ctaConfig,
              infoClassName: "lg:max-w-[560px]",
              extraComponent: <InfoList data={item.items} />,
            }}
            image={
              <div className="block w-full md:self-center md:w-[40%] lg:w-[42%] xl:self-start">
                <Image
                  src={item.imageLink}
                  alt="info-image"
                  width={700}
                  height={780}
                  quality={100}
                  className=" object-cover "
                />
              </div>
            }
            imageDirection={item.imageDirection as ImageDirection}
          />
        ))}
      </div>

      <Stories />
      <FooterRegisterFrom
        ref={registerForm}
        heading={
          <>
            Ready to earn some <span className="text-green-500">Extra Bread</span>?
          </>
        }
        description={
          'Join ExtraBread now to earn extra income, expand your skills, and maintain your commitments. Gain valuable experience with established point-of-sale systems and be part of a collaborative team for personal and financial growth!'
        }
        formTitle="Start Earning Money Today"
        formSubTilte="Fill out the form and we will reach out to you in 24-48 hours"
      />
    </div>
  );
};

export default PartnerPage;
