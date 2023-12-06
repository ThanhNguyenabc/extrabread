import BannerX from '@/components/elements/partner/BannerX';
import DiscoverPartner from '@/components/elements/partner/DiscoverPartner';
import InfoList from '@/components/elements/partner/InfoList';
import PartnerForm from '@/components/elements/partner/PartnerForm';
import Stories from '@/components/elements/partner/Stories';
import InfoSection, { ImageDirection } from '@/components/ui/info_section';
import { subject } from '@/helpers';
import {
  IcAppointment,
  IcBasePay,
  IcBonus,
  IcIncome,
  PartnerBoss,
  PartnerCover,
  PartnerTeamate,
  PartnerWFH,
} from '@/ui/img-resource/ImageResources';
import { WorkWithTheBest } from '@/ui/organisms/work-with-the-best/WorkWithTheBest';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

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
    key: 'referral',
    title: 'Quick & Easy Cash Flow',
    desc: 'Earn quick and easy money through our referral program by introducing your favorite establishments to ExtraBread. Enjoy residual monthly income for successful referrals and closed deals. Join now to turn your network into a lucrative source of earnings!',
    imageLink: PartnerWFH,
    imageDirection: 'left',
    tagConfig: {
      text: 'Referral Program',
      tagClassName: 'bg-yellow-200',
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
    key: 'in-house',
    title: 'Working With The Best',
    desc: "Our In-house Agent Program is an exclusive opportunity to delve deep into our service offerings. By enrolling, you'll gain valuable insights, become an integral team member, and receive expert training to excel in your role. Alongside this, you'll enjoy numerous benefits, such as access to dedicated office facilities, administrative support, and a variety of enticing perks. The program also offers a competitive base salary with the potential for significant residuals and performance-based bonuses.",
    imageLink: PartnerTeamate,
    imageDirection: 'right',
    tagConfig: {
      text: 'In-house Agent Program',
      tagClassName: 'bg-red-200',
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
    key: 'iso-agent',
    title: 'Being Your Own Boss',
    desc: 'Join ExtraBread as an independent sales office agent and embrace the freedom of being your own boss. Empower merchants with expert advice on ideal point-of-sale systems, build long-term relationships, and expand your portfolio alongside us.',
    imageLink: PartnerBoss,
    imageDirection: 'left',
    tagConfig: {
      text: 'Iso Agent Program',
      tagClassName: 'bg-green-200',
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

  useEffect(() => {
    subject?.subscribe({
      next(value) {
        const { id } = value || {};
        const section = document.getElementById(id);
        if (section)
          section.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'center' });
      },
    });
  }, []);

  return (
    <div className="flex flex-col">
      <BannerX
        tag={'Partnership'}
        heading="The Ultimate Side Hustle"
        desc="This is the perfect opportunity to earn extra monthly income & bonuses on your free time."
        image={PartnerCover}
        button={{
          title: 'Join ExtraBread Today',
          onBtnClick: onJoinExtrabread,
        }}
        leftCmpClassName="lg:justify-between"
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
      <div className="flex flex-col">
        {PartnerPrograms.map(item => (
          <InfoSection
            id={item.key}
            key={`${item.key}`}
            dataConfig={{
              ...item,
              tagConfig: item.tagConfig,
              ctaConfig: ctaConfig,
              infoClassName: 'lg:max-w-[560px]',
              extraComponent: <InfoList data={item.items} />,
            }}
            image={
              <div className="flex w-full md:w-[40%] lg:w-[45%] h-[100%] bg-green-100">
                <Image
                  src={item.imageLink}
                  alt="info-image"
                  width={700}
                  height={780}
                  quality={100}
                  className=" object-contain bg-green-100 h-full"
                />
              </div>
            }
            imageDirection={item.imageDirection as ImageDirection}
          />
        ))}
      </div>
      <WorkWithTheBest />
      <Stories />
      <PartnerForm
        ref={registerForm}
        heading={'Earn Extra Cash with ExtraBread'}
        description={
          'Turn your downtime into extra cash with ExtraBread! No need for big commitments - refer businesses and watch the bonuses and monthly residual income roll in. Sign up with us today.'
        }
        formTitle="Start Earning Monthly Residual Income Today"
        formSubTilte="Fill out the form and we will reach out to you in 24-48 hours"
      />
    </div>
  );
};

export default PartnerPage;
