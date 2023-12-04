import SideHustle from '@/components/elements/about/side_hustle';
import BannerX from '@/components/elements/partner/BannerX';
import InfoSection, { ImageDirection } from '@/components/ui/info_section';
import { RouteConfig } from '@/constants';
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
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const PaymentInfoSections = [
  {
    image: CreditCardBanner,
    imageDirection: 'right',
    title: 'Credit Card Terminal',
    desc: 'Making payments in person has never been simpler. With ExtraBread’s credit card terminals operate your business at incredible speeds, be able to receive contactless payments and accept chip cards and magstripe.\n \n Our processing solutions allow customers to pay using their preferred payment methods, keeping the line moving and enabling your business to function smoothly.',
    items: [
      {
        image: PaymentTerminalIcon,
        text: 'Payment flexbility',
      },
      {
        image: ChipIcon,
        text: 'EMV chip reader compatibility',
      },
      {
        image: WirelessIcon,
        text: 'Wifi and Wireless models available',
      },
    ],
    url: RouteConfig.CreditCard,
  },
  {
    image: MobileCardReaderBanner,
    imageDirection: 'left',
    title: 'Mobile Card Reader',
    desc: 'Accept payments from anywhere at any time and allow for compatibility with any mobile device. Turn your smartphone or tablet into a POS, allowing you to accept card transactions or record cash-based sales. Take more payments on the go and expand your POS capabilities for less.',
    items: [
      {
        image: DevicesIcon,
        text: 'Pairs with any device',
      },
      {
        image: CreditCardIcon,
        text: 'Collect payments with ease',
      },
      {
        image: OptionIcon,
        text: 'Affordable choices',
      },
    ],
    url: RouteConfig.MobileCard,
  },
  {
    image: OnlineProcessingBanner,
    imageDirection: 'right',
    title: 'Online Processing',
    desc: "To cater to consumers who shop at any time, it's crucial to have a dependable online payment processing service. ExtraBread provides this service, allowing you to accept credit and debit cards online through Authorize.Net non-stop.",
    items: [
      {
        image: CartIcon,
        text: 'Shopping cart compatibility',
      },
      {
        image: InterfaceIcon,
        text: 'A built-in merchant interface',
      },
      {
        image: VirtualIcon,
        text: 'Onlineterminal',
      },
    ],

    url: RouteConfig.OnlineProcessing,
  },
];

const PaymentProcessing = () => {
  const router = useRouter();

  const onGetStart = () => {
    router.push(RouteConfig.GetPricing);
  };

  return (
    <>
      <BannerX
        leftCmpClassName="w-full items-center"
        headingClassName="text-center md:max-w-[700px] xl:max-w-[980px]"
        heading={<>Payment Processing</>}
        desc="Our processing solutions allow customers to pay using their preferred payment methods, keeping the line moving and enabling your business to function smoothly."
        button={{
          title: 'Get Started',
          onBtnClick: onGetStart,
        }}
      />
      <div className="flex flex-col pb-10 md:pb-16 lg:pb-20">
        {PaymentInfoSections.map(data => {
          return (
            <InfoSection
              key={`${data.title}`}
              className="pb-0 md:pb-0 md:gap-8 lg:gap-16 xl:pb-0"
              dataConfig={{
                ...data,
                infoClassName: 'justify-center',
                ctaConfig: {
                  title: 'Learn more',
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
                        <p className="text-sm-semibold  md:text-">{item.text}</p>
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
      <CTAInnerFooter
        htmlText="Discover the perfect point of sale system for your business today!"
        bonus={2500}
        sale={250000}
      />
    </>
  );
};

export default PaymentProcessing;
