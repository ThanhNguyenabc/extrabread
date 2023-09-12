import { Space, Typography } from 'antd';
import OnlineReportingBanner from 'public/images/banners/Online Reporting.png';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';
import { ProductFeature } from './components/features/ProductFeature';

import EffortlesslyImg from 'public/images/products/Effortlessly.png';
import HandlingDisputesImg from 'public/images/products/Handling Disputes.png';
import ReviewYourDepositImg from 'public/images/products/Review Your Deposit History.png';
import TrackYourStatementsImg from 'public/images/products/Track Your Statements.png';

import { BUSINESS_MENU } from '~/constants/index';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';
import styles from './ProductsTemplate.module.scss';

const { Text } = Typography;
const BANNER_CONTENT = [
  'Access account activity 24/7.',
  'Review and reconcile deposit history.',
  'Generate and download reports with ease.',
  'Analyze business performance through online analytics.',
];

export const OnlineReporting = () => {
  return (
    <div>
      <Banner
        hasBackground
        type={['product', 'align-left']}
        content={<span>Online Analytics</span>}
        button={<GetPricingButton />}
        src={OnlineReportingBanner.src}
        descriptions={
          <Space direction="vertical">
            {BANNER_CONTENT.map((item, idx) => (
              <Space
                size={16}
                align="baseline"
                key={`${idx}`}
                className={styles['product_icon-check']}
              >
                <Icon name="check" />
                <Text strong>{item}</Text>
              </Space>
            ))}
          </Space>
        }
      />

      <BreadCard>
        <div className={styles['product_info']}>
          <Text color="green">Gain real-time access to your business</Text>
          <Text>
            {' '}
            account activity and acquire comprehensive industry insights and forecasts, making more
            informed decisions at every turn.
          </Text>
        </div>
      </BreadCard>

      <BreadCard>
        <ProductFeature
          reversed
          src={TrackYourStatementsImg}
          alt="Track Your Statements"
          content={{
            title: 'Track Your Statements',
            description:
              'Easily monitor all of your business activities with our online account manager, so you can address any discrepancies before they become a problem.',
            details: [
              'Quickly find information on transactions, chargebacks, and more.',
              'Access your account online 24/7.',
            ],
          }}
        />
        <ProductFeature
          src={ReviewYourDepositImg}
          alt="Review Your Deposit History"
          content={{
            title: 'Review Your Deposit History',
            description:
              'Reconcile and view your deposit history so you always know when funds are available.',
            details: [
              'Seamlessly use your accounting software and online reporting together.',
              'Keep track of critical account information with ease.',
            ],
          }}
        />
        <ProductFeature
          reversed
          src={HandlingDisputesImg}
          alt="Handling Disputes"
          content={{
            title: 'Handling Disputes',
            description:
              'Gain insight into all your transactions and manage disputes with ease using our online reporting.',
            details: [
              'Quickly access the most recent account information at any time.',
              'Monitor chargebacks in real-time as they happen.',
            ],
          }}
        />
        <ProductFeature
          src={EffortlesslyImg}
          alt="Effortlessly"
          content={{
            title: 'Monitor and track industry performance',
            description:
              'Gain access to valuable tools and data management systems that eliminate the guesswork and aid in business development.',
            details: [
              'Conduct performance comparisons with your competitors',
              'Receive valuable insights about your industry and community to inform better decision making',
            ],
          }}
        />
      </BreadCard>

      <BreadCard>
        <AllBusinesses
          noColor
          type="product"
          heading={['Online Analytics for all types of business']}
          subHeading="Learn more about how we can help your business."
          list={BUSINESS_MENU}
        />
      </BreadCard>

      <BreadCard>
        <DiscoverBanner
          type="product"
          heading="Ready to implement a Online Analytics for your business?"
        />
      </BreadCard>
    </div>
  );
};
