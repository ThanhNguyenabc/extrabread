import { Space } from 'antd';
import {
  IcChevronRight,
  LandingBanner,
  ReceiveCashIcon,
  SaveMoneyIcon,
  ZeroProcessingFeesIcon,
} from '~/ui/img-resource/ImageResources';

import { Button } from '@/ui/atoms/button/Button';
import Link from 'next/link';
import { BUSINESS_MENU, RouteConfig } from '~/constants/index';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { TrustScore } from '~/ui/atoms/trust-score/TrustScore';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import { Banner } from '~/ui/organisms/banner/Banner';
import { CTAInnerFooter } from '~/ui/organisms/cta-inner-footer/CTAInnerFooter';
import { UniqueValue } from '~/ui/organisms/unique-value/UniqueValue';
import { WorkWithTheBest } from '~/ui/organisms/work-with-the-best/WorkWithTheBest';
import styles from './Home.module.scss';
import { HowItWorks } from './components/HowItWorks';
import { SolutionList } from './components/SolutionList';
import { Testimonials } from './components/testimonials/Testimonials';

export const HomeTemplate = () => {
  return (
    <>
      <Banner
        hasBackground
        type="home"
        content={<>Save & Earn More with Top Payment & POS Solutions</>}
        button={
          <>
            <div className="flex items-center justify-center flex-col gap-3 md:flex-row  md:gap-4 lg:justify-start">
              <GetPricingButton title="Get Pricing Today" size="large" />
              <Link href={RouteConfig.Partner}>
                <Button
                  size="large"
                  className="flex justify-center items-center gap-2 border-none hover:text-green-500"
                >
                  {'Partner with us'}
                  <IcChevronRight />
                </Button>
              </Link>
            </div>
            <div>
              <TrustScore score={4.5} />
            </div>
          </>
        }
        src={LandingBanner.src}
        extractComponent={
          <div className={styles['home-template_banner-footer']}>
            <Space>
              <SaveMoneyIcon />
              Save money with a free POS
            </Space>
            <Space>
              <ReceiveCashIcon /> Receive a large cash signing bonus
            </Space>
            <Space>
              <ZeroProcessingFeesIcon /> Zero Processing Fees
            </Space>
          </div>
        }
      />

      <HowItWorks />

      <UniqueValue />

      <WorkWithTheBest />

      <BreadCard>
        <AllBusinesses
          heading={['Point-of-sale', 'for all business categories']}
          list={BUSINESS_MENU}
        />
      </BreadCard>

      <SolutionList />

      <Testimonials />

      <CTAInnerFooter
        htmlText="Discover the perfect point of sale system for your business today!"
        bonus={2500}
        sale={250000}
      />
    </>
  );
};
