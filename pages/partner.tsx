import BannerX from '@/components/elements/partner/BannerX';
import Calculator from '@/components/elements/partner/Calculator';
import DiscoverPartner from '@/components/elements/partner/DiscoverPartner';
import PartnerEvents from '@/components/elements/partner/PartnerEvents';
import PartnerForm from '@/components/elements/partner/PartnerForm';
import { Button } from '@/components/ui/button';
import Hero from '@/components/ui/hero';
import { subject } from '@/helpers';
import { Meta } from '@/models/app_config.model';
import { Collapse, Panel } from '@/ui/atoms/collapse/Collapse';
import { Heading } from '@/ui/atoms/heading/Heading';
import {
  CashBonusIcon,
  Consideration,
  IcAppointment,
  IcBasePay,
  IcBonus,
  IcIncome,
  ItemManagementIcon,
  NegociationIcon,
  PartnerCover,
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

const PartnerProgramConfigs = {
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
  const { t: common } = useTranslation('common');
  const { t } = useTranslation('partner');
  const registerForm = useRef<HTMLDivElement>(null);
  const featureItems = t('feature_items', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;

  const bannerItems = t('items', { returnObjects: true }) as Array<any> | null;

  const FAQ = t('partner_faq', { returnObjects: true }) as Array<{
    header: string;
    content: string;
  }> | null;

  const onJoinExtrabread = () => {
    registerForm?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'end',
    });
  };

  const pickReasonItems = t('picking_reason_items', { returnObjects: true }) as Array<{
    title: string;
    text_link: string;
    link: string;
  }> | null;

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
              heading={t('heading')}
              desc={t('sub_heading')}
              image={PartnerCover}
              button={{
                title: common('join_extrbread'),
                onBtnClick: onJoinExtrabread,
              }}
              leftCmpClassName="lg:justify-between"
              extraComponent={
                <div className="flex gap-3 md:gap-4 lg:mx-auto">
                  {bannerItems?.map(item => {
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
              {t('feature_heading')}
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 lg:grid-cols-3">
              {featureItems?.map((item, index) => {
                const Icon = FeatureIcons[index];
                return (
                  <div className="flex flex-col gap-3 md:gap-4" key={item.title}>
                    <Icon />
                    <h4 className="text-md-semibold md:text-2xl-semibold"> {item.title}</h4>
                    <p className="md:text-lg text-neutral-700">{item.desc}</p>
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
          <PartnerEvents />
          <Hero className=" items-center">
            <Heading level={3} centered>
              {common('frequently_questions')}
            </Heading>

            <Collapse>
              {FAQ?.map(({ header, content }) => (
                <Panel header={header} key={header} className="w-full sm:w-[768px]">
                  {content}
                </Panel>
              ))}
            </Collapse>
          </Hero>

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
