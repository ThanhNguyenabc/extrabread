import { Space } from 'antd';
import dynamic from 'next/dynamic';
import {
  IcChevronRight,
  ReceiveCashIcon,
  SaveMoneyIcon,
  ZeroProcessingFeesIcon,
} from '~/ui/img-resource/ImageResources';
import styles from './Home.module.scss';

import { RouteConfig } from '@/constants/routes';
import { Button } from '@/ui/atoms/button/Button';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { TrustScore } from '~/ui/atoms/trust-score/TrustScore';
import { Banner } from '~/ui/organisms/banner/Banner';

const MerchantFee = dynamic(() => import('@/components/elements/home/MerchantFee'));
const CompetitiveAdvantage = dynamic(
  () => import('@/ui/templates/home/components/CompetitiveAdvantage'),
);
const AllBusinesses = dynamic(() =>
  import('~/ui/organisms/all-businesses/AllBusinesses').then(res => res.AllBusinesses),
);
const CTAInnerFooter = dynamic(() =>
  import('~/ui/organisms/cta-inner-footer/CTAInnerFooter').then(res => res.CTAInnerFooter),
);

const UniqueValue = dynamic(() =>
  import('~/ui/organisms/unique-value/UniqueValue').then(res => res.UniqueValue),
);

const WorkWithTheBest = dynamic(() =>
  import('~/ui/organisms/work-with-the-best/WorkWithTheBest').then(res => res.WorkWithTheBest),
);

const HowItWorks = dynamic(() => import('./components/HowItWorks').then(res => res.HowItWorks));
const SolutionList = dynamic(() =>
  import('./components/SolutionList').then(res => res.SolutionList),
);

const Testimonials = dynamic(() =>
  import('./components/testimonials/Testimonials').then(res => res.Testimonials),
);
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

export const HomeTemplate = ({ title }: { title?: string }) => {
  const { t: common } = useTranslation();
  const { t } = useTranslation('home');

  return (
    <>
      <Banner
        hasBackground
        type="home"
        content={<>{title ?? t('pageTitle')}</>}
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
        src={
          'https://res.cloudinary.com/dgrym3yz3/image/upload/v1718772055/extrabread/banners/hjjfbyzvjb22veb0zhu2.webp'
        }
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
      <CompetitiveAdvantage />
      <UniqueValue />
      <MerchantFee />

      <HowItWorks />

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
