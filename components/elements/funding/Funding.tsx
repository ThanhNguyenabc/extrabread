import { Button } from '@/components/ui/button';
import Hero from '@/components/ui/hero';
import { CheckCircleIcon, ReceiveCashIcon, WritingIcon } from '@/ui/img-resource/ExIcon';
import HTMLReactParser from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React, { useRef } from 'react';
import BannerX from '../partner/BannerX';
import FundingForm, { FundingFormHandle } from './FundingForm';
import QuickEasy from './QuickEasy';
import ReliableTechnology from './ReliableTechnology';

const BannerIcons = [WritingIcon, CheckCircleIcon, ReceiveCashIcon];

const Funding = () => {
  const { t: common } = useTranslation();
  const formRef = useRef<FundingFormHandle>(null);
  const { t } = useTranslation('funding');

  const bannerItems = t('bannerItems', { returnObjects: true }) as string[];

  const startSameDayForm = () => formRef.current?.showDialog();

  return (
    <>
      <BannerX
        className="lg:gap-10"
        heading={t('heading')}
        desc={t('sub_heading')}
        image={
          'https://res.cloudinary.com/dgrym3yz3/image/upload/v1719305641/extrabread/common/a63udd8qlcys1dtahzod.webp'
        }
        button={{
          title: common('get_start_today'),
          onBtnClick: startSameDayForm,
          className: 'lg:bg-neutral-900',
        }}
        headingClassName="max-w-none lg:max-w-fit"
        leftCmpClassName="lg:justify-between"
        extraComponent={
          <div className="flex flex-row bg-neutral-100 p-3 rounded-full gap-3 md:gap-4">
            {bannerItems?.map((item, index) => {
              const Icon = BannerIcons[index];
              return (
                <div key={`${item}`} className="flex flex-col flex-1  items-center gap-2">
                  <Icon width={24} height={24} />
                  <p className="text-center text-xs-semibold md:text-lg  text-neutral-700 ">
                    {t(item)}
                  </p>
                </div>
              );
            })}
          </div>
        }
      />
      <div className="bg-green-500">
        <Hero className="gap-6 md:gap-12 text-white text-center items-center">
          <h3 className="heading-xs md:text-center whitespace-pre-line md:heading-lg">
            {`Same day funding\nVs. Standard funding`}
          </h3>

          <Image
            alt="funding image"
            className="w-full"
            width={1200}
            height={576}
            quality={95}
            sizes="100vw"
            src={
              'https://res.cloudinary.com/dgrym3yz3/image/upload/v1719305641/extrabread/common/ssvtvvbybhhlvewsiedk.webp'
            }
          />

          <h3 className="heading-xs">Switch to Same Day Funding Today</h3>

          <Button
            size={'responsive'}
            onClick={startSameDayForm}
            className="bg-neutral-900 hover:bg-neutral-900/90"
          >
            {common('get_start_today')}
          </Button>
        </Hero>
      </div>
      <Hero className="gap-6 md:gap-12 items-center">
        <h3 className="heading-xs text-center md:heading-lg md:max-w-[650px]">
          {HTMLReactParser(
            `Waiting for deposits can be a major challenge for businesses but not with <span className="text-green-500">ExtraBread</span>`,
          )}
        </h3>
        <p className=" whitespace-pre-line md:text-lg">
          {`With Cygma, our full-stack authorization and clearing platform, allow your business to
          access funds from payment processing transactions on the same day they are processed.
          Simply known as same-day funding, this option eliminates the typical delay of waiting for
          funds to clear, providing immediate access to your funds when you need it most.\n\nEmpower your business with greater financial agility and responsiveness with our rapid funding
          solutions. Perfect for bars, restaurants and any other type of businesses, say goodbye to
          transaction delays and processing fees and get started with ExtraBread today!`}
        </p>
        <Button size={'responsive'} onClick={startSameDayForm}>
          {common('get_start_today')}
        </Button>
      </Hero>

      <Hero className="gap-6 md:gap-8 lg:gap-10 lg:flex-row-reverse">
        <div className="w-full aspect-square  flex-1 relative">
          <Image
            alt="funding-how is it work"
            fill
            className=" object-cover"
            quality={100}
            src={
              'https://res.cloudinary.com/dgrym3yz3/image/upload/v1719463334/extrabread/common/m2ocglpjwmhcqhlzohzm.webp'
            }
          />
        </div>
        <div className="flex flex-1 flex-col gap-6 justify-center">
          <h3 className="heading-xs whitespace-pre-line md:heading-lg md:max-w-[784px]">
            {`How Does It Work?`}
          </h3>
          <p className="whitespace-pre-line">
            {`Get faster deposits, delivering funds in as little as 8 hours. Simply process your batch before the 6:00 AM EST cut-off time at your point of sale or terminal. If you meet this deadline, your batch deposit will arrive in your bank account before 5:00 PM EST on the same day.\n\nYou can choose any bank account for the deposit and same day funding is available even on weekends. Plus, on Fridays, same day funding has an edge over next day funding. Settle your batch by the Friday cut-off time to receive your deposit on the same day.`}
          </p>
          <Button size={'responsive'} onClick={startSameDayForm}>
            {common('get_start_today')}
          </Button>
        </div>
      </Hero>
      <ReliableTechnology />
      <QuickEasy btnClick={startSameDayForm} />
      <FundingForm ref={formRef} />
    </>
  );
};

export default Funding;
