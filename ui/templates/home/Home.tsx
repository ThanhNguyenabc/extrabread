import { Space } from 'antd';
import {
  IcChevronRight,
  LandingBanner,
  ReceiveCashIcon,
  SaveMoneyIcon,
  ZeroProcessingFeesIcon,
} from '~/ui/img-resource/ImageResources';

import MerchantFee from '@/components/elements/home/MerchantFee';
import { Button } from '@/ui/atoms/button/Button';
import CompetitiveAdvantage from '@/ui/templates/home/components/CompetitiveAdvantage';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { RouteConfig } from '~/constants/index';
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

const BannerItems = [
  {
    title: 'saving_money',
    icon: SaveMoneyIcon,
  },
  {
    title: 'siging_bonus',
    icon: ReceiveCashIcon,
  },
  {
    title: 'processing_fee',
    icon: ZeroProcessingFeesIcon,
  },
];

export const HomeTemplate = () => {
  const { t: common } = useTranslation();
  const { t } = useTranslation('home');

  return (
    <>
      <Banner
        hasBackground
        type="home"
        content={<>{t('pageTitle')}</>}
        button={
          <>
            <div className="flex items-center justify-center flex-col gap-3 md:flex-row  md:gap-4 lg:justify-start">
              <GetPricingButton title={common('get_pricing_today')} size="large" />
              <Link href={RouteConfig.Partner} className="w-full">
                <Button
                  size="large"
                  className="flex justify-center items-center gap-2 border-none hover:text-green-500"
                >
                  {common('partner_with_us')}
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
            {BannerItems.map(({ title, icon: Icon }) => (
              <Space key={title}>
                <Icon />
                {t(title)}
              </Space>
            ))}
          </div>
        }
      />

      <HowItWorks />

      <MerchantFee />

      <CompetitiveAdvantage />

      <UniqueValue />

      <WorkWithTheBest />

      <BreadCard>
        <AllBusinesses heading={common('point_of_sale.heading')} />
      </BreadCard>

      <SolutionList />

      <Testimonials />

      <CTAInnerFooter htmlText={common('footer.heading')} bonus={2500} sale={250000} />
    </>
  );
};
