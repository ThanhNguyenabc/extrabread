import SideHustle from '@/components/elements/about/side_hustle';
import BannerX from '@/components/elements/partner/BannerX';
import InfoSection, { ImageDirection } from '@/components/ui/info_section';
import { RouteConfig } from '@/constants/routes';
import {
  CartIcon,
  ChipIcon,
  CreditCardBanner,
  CreditCardIcon,
  DevicesIcon,
  IcChevronRight,
  InterfaceIcon,
  MobileCardReaderBanner,
  OnlineProcessingBanner,
  OptionIcon,
  PaymentTerminalIcon,
  VirtualIcon,
  WirelessIcon,
} from '@/ui/img-resource/ImageResources';
import { CTAInnerFooter } from '@/ui/organisms/cta-inner-footer/CTAInnerFooter';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const PaymentInfoSections = [
  {
    image: CreditCardBanner,
    imageDirection: 'right',
    title: 'payment_credit_card.title',
    desc: 'payment_credit_card.desc',
    items: [
      {
        image: PaymentTerminalIcon,
        text: 'payment_credit_card.payment_flexible',
      },
      {
        image: ChipIcon,
        text: 'payment_credit_card.chip_reader',
      },
      {
        image: WirelessIcon,
        text: 'payment_credit_card.wireless_models',
      },
    ],
    url: RouteConfig.CreditCard,
  },
  {
    image: MobileCardReaderBanner,
    imageDirection: 'left',
    title: 'payment_mobile_card.title',
    desc: 'payment_mobile_card.desc',
    items: [
      {
        image: DevicesIcon,
        text: 'payment_mobile_card.pair_device',
      },
      {
        image: CreditCardIcon,
        text: 'payment_mobile_card.collect_payments',
      },
      {
        image: OptionIcon,
        text: 'payment_mobile_card.affordable',
      },
    ],
    url: RouteConfig.MobileCard,
  },
  {
    image: OnlineProcessingBanner,
    imageDirection: 'right',
    title: 'payment_online_processing.title',
    desc: 'payment_online_processing.desc',
    items: [
      {
        image: CartIcon,
        text: 'payment_online_processing.shopping_cart',
      },
      {
        image: InterfaceIcon,
        text: 'payment_online_processing.mechant_interface',
      },
      {
        image: VirtualIcon,
        text: 'payment_online_processing.online_terminal',
      },
    ],
    url: RouteConfig.OnlineProcessing,
  },
];

const PaymentProcessing = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { t: paymentTrans } = useTranslation('payment_processing');
  const onGetStart = () => {
    router.push(RouteConfig.GetPricing);
  };

  return (
    <>
      <BannerX
        leftCmpClassName="w-full items-center"
        headingClassName="text-center md:max-w-[700px] xl:max-w-[980px]"
        heading={t('payment_processing')}
        desc={t('payment_desc', {
          ns: 'payment_processing',
        })}
        button={{
          title: t('get_started'),
          onBtnClick: onGetStart,
        }}
      />
      <div className="flex flex-col pb-10 md:pb-16 lg:pb-20">
        {PaymentInfoSections.map(data => {
          return (
            <InfoSection
              key={`${data.title}`}
              translation={paymentTrans}
              className="pb-0 md:pb-0 md:gap-8 lg:gap-16 xl:pb-0"
              dataConfig={{
                ...data,
                infoClassName: 'justify-center',
                ctaConfig: {
                  title: t('learn_more'),
                  onClick: () => router.push(data.url),
                  rightIcon: <IcChevronRight />,
                  buttonProps: {
                    variant: 'outline',
                    size: 'default',
                  },
                },
                extraComponent: (
                  <div className="flex  flex-col gap-4 my-4 md:gap-8 lg:my-10 lg:flex-row">
                    {data.items.map(item => (
                      <div key={`${item.text}`} className="w-fit flex flex-row gap-4 items-center">
                        <item.image className="w-8 h-8 md:w-12 md:h-12" />
                        <p className="text-sm-semibold  md:text-">
                          {t(item.text, {
                            ns: 'payment_processing',
                          })}
                        </p>
                      </div>
                    ))}
                  </div>
                ),
              }}
              imageDirection={data.imageDirection as ImageDirection}
              image={
                <div className="md:w-[50%] self-center h-fit bg-neutral-100 lg:max-w-[447px] xl:max-h-[500px]">
                  <Image
                    src={data.image}
                    alt={`${data.title}`}
                    quality={90}
                    width={447}
                    height={500}
                  />
                </div>
              }
            />
          );
        })}
      </div>
      <SideHustle />
      <CTAInnerFooter htmlText={t('footer.heading')} bonus={2500} sale={250000} />
    </>
  );
};

export default PaymentProcessing;
