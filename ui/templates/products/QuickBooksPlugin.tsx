import { Space, Typography } from 'antd';
import QuickbooksPluginBanner from 'public/images/banners/Quickbooks Plugin.png';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';
import { ProductFeature } from './components/features/ProductFeature';

import CustomizeYourSupportImg from 'public/images/products/Customize Your Support.png';
import EffortlesslyImg from 'public/images/products/Effortlessly.png';
import TrackYourStatementsImg from 'public/images/products/Track Your Statements.png';

import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import styles from './ProductsTemplate.module.scss';

const { Text } = Typography;
const BANNER_CONTENT = [
  'Transfers to QuickBooks programs without manual intervention',
  'Handle payment methods and sales management',
  'Record taxes using single, combined, or multiple rates',
  'Dashboard can be customized to suit your needs',
];

export const QuickBooksPlugin = () => {
  return (
    <div>
      <Banner
        hasBackground
        type={['product', 'align-left']}
        content={<span>Quickbooks Plugin</span>}
        button={<GetPricingButton />}
        src={QuickbooksPluginBanner.src}
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
          <Text color="green">Using Quickbooks makes bookkeeping easier</Text>
          <Text> so you can focus on the important parts of running your business</Text>
        </div>
      </BreadCard>

      <BreadCard>
        <ProductFeature
          reversed
          src={EffortlesslyImg}
          alt="Effortlessly move your sales data"
          content={{
            title: 'Effortlessly move your sales data',
            description:
              'Avoid wasting time on manual data entry with nightly transfers that consolidate your sales information into the programs you already utilize.',
            details: [
              'Migrate sales data to QuickBooks Online, QuickBooks for Desktop, or Xero',
              'Link and transfer data to multiple destinations',
            ],
          }}
        />
        <ProductFeature
          src={TrackYourStatementsImg}
          alt="Track Your Monitor Payment Information"
          content={{
            title: 'Monitor Payment Information',
            description: `Efficiently manage your payment tracking with CommerceSync's simplified system.`,
            details: [
              'Keep track of payment methods and tax obligations using single, combined, or multiple rates',
              'Log complete and partial refunds in a designated income account to maintain organization.',
            ],
          }}
        />
        <ProductFeature
          reversed
          src={CustomizeYourSupportImg}
          alt="Customize Your Customize Your Support"
          content={{
            title: 'Customize Your Support',
            description: `Get quick and convenient assistance with CommerceSync's customizable dashboard.`,
            details: [
              `Automatically reconcile credit settlements with access to support "after hours"`,
              'No limit or additional fees for the number of daily, monthly, or yearly sales synchronized.',
            ],
          }}
        />
        <ProductFeature
          src={EffortlesslyImg}
          alt="Increased Functionality with Additional Features"
          content={{
            title: 'Increased Functionality with Additional Features',
            description:
              'Eliminates the hassles of business management with its fully automated capabilities.',
            details: [
              'Utilize the Customer Detail function to monitor sales on an individual customer basis.',
              'Invoices are automatically updated with discounts, tips, refunds, and other adjustments for improved efficiency.',
            ],
          }}
        />
      </BreadCard>

      <BreadCard>
        <AllBusinesses
          noColor
          type="product"
          heading={'Quickbooks Plugin for every business.'}
          subHeading="Eliminate manual bookkeeping for good with QuickBooks Plugin. Find the one that’s right for your business."
        />
      </BreadCard>

      <BreadCard>
        <DiscoverBanner
          type="product"
          heading="Ready to implement Quickbooks Plugin for your business?"
        />
      </BreadCard>
    </div>
  );
};
