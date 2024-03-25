import BannerX from '@/components/elements/partner/BannerX';
import Calculator from '@/components/elements/partner/Calculator';
import DiscoverPartner from '@/components/elements/partner/DiscoverPartner';
import InfoList from '@/components/elements/partner/InfoList';
import PartnerForm from '@/components/elements/partner/PartnerForm';
import { Button } from '@/components/ui/button';
import Hero from '@/components/ui/hero';
import InfoSection, { ImageDirection } from '@/components/ui/info_section';
import { subject } from '@/helpers';
import { Meta } from '@/models/app_config.model';
import {
  CashBonusIcon,
  Consideration,
  IcAppointment,
  IcBasePay,
  IcBonus,
  IcIncome,
  ItemManagementIcon,
  NegociationIcon,
  PartnerBoss,
  PartnerCover,
  PartnerTeamate,
  PartnerWFH,
  ReferalProgram1,
  TipPoolingIcon,
  UserFriendlyIcon,
} from '@/ui/img-resource/ImageResources';
import { Seo } from '@/ui/util-components/Seo';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next/types';
import React, { useContext, useEffect, useRef } from 'react';
import { getSEOTag } from './api/app-configs';

type PartnerProgram = {
  key: string;
  tag: string;
  title: string;
  desc: string;
  items: Array<{
    title: string;
    desc: string;
  }>;
};

const PartnerProgramConfigs = {
  referral: {
    imageLink: PartnerWFH,
    imageDirection: 'left',
    tagConfig: {
      text: 'Referral Program',
      tagClassName: 'bg-yellow-200',
    },
  },
  'in-house': {
    imageLink: PartnerTeamate,
    imageDirection: 'right',
    tagConfig: {
      text: 'In-house Agent Program',
      tagClassName: 'bg-red-200',
    },
  },
  'iso-agent': {
    imageLink: PartnerBoss,
    imageDirection: 'left',
    tagConfig: {
      text: 'Iso Agent Program',
      tagClassName: 'bg-green-200',
    },
  },
  basePay: IcBasePay,
  bonus: IcBonus,
  income: IcIncome,
  appointment: IcAppointment,
};

const FeatureIcons = [
  TipPoolingIcon,
  UserFriendlyIcon,
  UserFriendlyIcon,
  CashBonusIcon,
  ItemManagementIcon,
  NegociationIcon,
];

export const PartnerContext = React.createContext<{
  navigatePartnerForm: () => void;
}>({ navigatePartnerForm: () => {} });

export const usePartnerContext = () => useContext(PartnerContext);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('partner', locale),
    serverSideTranslations(locale ?? 'en', ['common', 'partner']),
  ]);
  return {
    props: {
      seoTag,
      ...translation,
    },
    revalidate: 120,
  };
};

const PartnerPage = ({ seoTag }: { seoTag?: Meta }) => {
  const { title, description, keywords, image } = seoTag || {};
  const { t: common } = useTranslation();
  const { t } = useTranslation('partner');
  const registerForm = useRef<HTMLDivElement>(null);
  const programs = t('programs', { returnObjects: true }) as Array<PartnerProgram>;

  const featureItems = t('feature_items', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;

  const bannerItems = t('items', { returnObjects: true }) as Array<any>;

  const onJoinExtrabread = () => {
    registerForm?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'end',
    });
  };

  const ctaConfig = {
    title: common('join_extrbread'),
    onClick: onJoinExtrabread,
  };

  const pickReasonItems = t('picking_reason_items', { returnObjects: true }) as Array<{
    title: string;
    text_link: string;
    link: string;
  }>;

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
    <>
      <Seo title={title} description={description} keywords={keywords} imageFeature={image}></Seo>

      <PartnerContext.Provider
        value={{
          navigatePartnerForm: onJoinExtrabread,
        }}
      >
        <div className="flex flex-col">
          <div className="bg-green-100">
            <BannerX
              tag={common('side_hustle.partner_ship')}
              heading={common('side_hustle.heading')}
              desc={common('side_hustle.desc2')}
              image={PartnerCover}
              button={{
                title: common('join_extrbread'),
                onBtnClick: onJoinExtrabread,
              }}
              leftCmpClassName="lg:justify-between"
              extraComponent={
                <div className="flex gap-3 md:gap-4 lg:mx-auto">
                  {bannerItems.map(item => {
                    const Icon = PartnerProgramConfigs[item.key];
                    return (
                      <div key={`${item.key}`} className="flex flex-col items-center gap-2">
                        <Icon
                          style={{
                            width: 48,
                            height: 48,
                          }}
                        />
                        <p className="text-center text-sm max-w-[100px]">{t(item.text)}</p>
                      </div>
                    );
                  })}
                </div>
              }
            />
          </div>
          <DiscoverPartner />
          <Hero className="flex flex-col items-center gap-12 md:gap-14 lg:gap-16">
            <Image
              width={816}
              height={486}
              src={ReferalProgram1}
              alt="join program"
              sizes="100vw"
            />
            <h3 className="mt-2 mb-8 heading-xs md:text-center md:heading-lg">
              {t('referal_program')}
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 lg:grid-cols-3">
              {featureItems?.map((item, index) => {
                const Icon = FeatureIcons[index];
                return (
                  <div className="flex flex-col gap-3 md:gap-4" key={item.title}>
                    <Icon />
                    <h4 className="text-md-semibold md:text-2xl-semibold"> {item.title}</h4>
                    <p className="text-neutral-700">{item.desc}</p>
                  </div>
                );
              })}
            </div>
            <Button onClick={onJoinExtrabread} size={'responsive'}>
              {common('join_extrbread')}
            </Button>
          </Hero>
          <Hero className="flex flex-col gap-6 md:gap-8 lg:flex-row">
            <div className="flex-1 self-center">
              <Image
                src={Consideration}
                width={534}
                height={526}
                alt="consider image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex-1 flex flex-col gap-8 md:gap-10">
              <h3 className="heading-xs text-center md:heading-lg lg:text-start">
                {t('pick_extrabread_heading')}
              </h3>
              <p className=" md:text-lg text-neutral-700">{t('pick_extrabread_desc')}</p>
              {pickReasonItems?.map(item => (
                <div key={item.title} className="flex flex-col gap-3 md:gap-4 w-full md:text-lg">
                  <div className=" h-[1px] bg-neutral-300" />
                  <p>{item.title}</p>
                  <Link href={item.link} className=" font-medium underline">
                    {item.text_link}
                  </Link>
                </div>
              ))}
              <Button onClick={onJoinExtrabread} size={'responsive'}>
                {common('join_extrbread')}
              </Button>
            </div>
          </Hero>
          {/* <div className="flex flex-col">
          {programs.map(item => (
            <InfoSection
              id={item.key}
              key={`${item.key}`}
              dataConfig={{
                ...item,
                tagConfig: {
                  ...PartnerProgramConfigs[item.key]['tagConfig'],
                  text: t(item.tag),
                },
                ctaConfig: ctaConfig,
                infoClassName: 'lg:max-w-[560px]',
                extraComponent: <InfoList data={item.items} />,
              }}
              image={
                <div className="flex w-full md:w-[40%] lg:w-[45%] h-[100%] bg-green-100">
                  <Image
                    src={PartnerProgramConfigs[item.key].imageLink || ''}
                    alt="info-image"
                    width={700}
                    height={780}
                    quality={100}
                    className=" object-contain bg-green-100 h-full"
                  />
                </div>
              }
              imageDirection={PartnerProgramConfigs[item.key]['imageDirection'] as ImageDirection}
            />
          ))}
        </div> */}
          <Calculator />
          <PartnerForm
            ref={registerForm}
            heading={t('form_heading')}
            description={t('from_sub_heading')}
            formTitle={t('form_title')}
            formSubTilte={t('form_desc')}
          />
        </div>
      </PartnerContext.Provider>
    </>
  );
};

export default PartnerPage;
