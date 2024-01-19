import BannerX from '@/components/elements/partner/BannerX';
import DiscoverPartner from '@/components/elements/partner/DiscoverPartner';
import InfoList from '@/components/elements/partner/InfoList';
import PartnerForm from '@/components/elements/partner/PartnerForm';
import Stories from '@/components/elements/partner/Stories';
import InfoSection, { ImageDirection } from '@/components/ui/info_section';
import { subject } from '@/helpers';
import { Meta } from '@/models/app_config.model';
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
import { Seo } from '@/ui/util-components/Seo';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { GetStaticProps } from 'next/types';
import React, { useEffect, useRef } from 'react';
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
      <div className="flex flex-col">
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
        <DiscoverPartner />
        <div className="flex flex-col">
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
        </div>
        <WorkWithTheBest />
        <Stories />
        <PartnerForm
          ref={registerForm}
          heading={t('form_heading')}
          description={t('from_sub_heading')}
          formTitle={t('form_title')}
          formSubTilte={t('form_desc')}
        />
      </div>
    </>
  );
};

export default PartnerPage;
