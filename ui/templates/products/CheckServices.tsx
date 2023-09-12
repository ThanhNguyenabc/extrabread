import { Space, Typography } from 'antd';
import CheckServicesBanner from 'public/images/banners/Check Services.png';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';
import { ProductFeature } from './components/features/ProductFeature';

import FasterFundsImg from 'public/images/products/Faster Funds.png';
import MitigateRiskImg from 'public/images/products/Mitigate Risk.png';
import NeverMissImg from 'public/images/products/Never Miss A Sale.png';

import { BUSINESS_MENU } from '~/constants/index';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import styles from './ProductsTemplate.module.scss';

const { Text } = Typography;
const BANNER_CONTENT = [
  'Mitigate the risk of fraud and minimize potential losses',
  'Cut down on processing costs',
  'Instantly approved checks',
  'Receive funds more quickly',
];

export const CheckServices = () => {
  return (
    <div>
      <Banner
        hasBackground
        type={['product', 'align-left']}
        content={<span>Check Services</span>}
        button={<GetPricingButton />}
        src={CheckServicesBanner.src}
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
          <Text color="green">Accept and convert paper checks into secure electronic payments</Text>
          <Text>
            {' '}
            at the point of sale, providing increased security and faster processing times.
          </Text>
        </div>
      </BreadCard>

      <BreadCard>
        <ProductFeature
          reversed
          src={FasterFundsImg}
          alt="Faster Funds"
          content={{
            title: 'Faster Funds',
            description:
              'By using a faster, affordable, and secure check processing system, you get rid of the wait and eliminate all the extra trips to the bank',
            details: [
              'Snap a photo of a check for instant acceptance',
              'Get funds from approved checks within two business days',
            ],
          }}
        />
        <ProductFeature
          src={MitigateRiskImg}
          alt="Mitigate Risk"
          content={{
            title: 'Mitigate Risk',
            description: 'Elecpayments offers protection and assurance with every transaction.',
            details: [
              'Reduce chargebacks and losses due to fraud',
              'Receive instant notification of check declines',
            ],
          }}
        />
        <ProductFeature
          reversed
          src={NeverMissImg}
          alt="Never Miss A Sale"
          content={{
            title: 'Never Miss A Sale',
            description:
              'Offer your customers more payment options and have more confidence, knowing that you can capture every sale.',
            details: [
              'Making customers satisfied by being able to pay with any payment option',
              'Boost cash flow with a fast processing and funding',
            ],
          }}
        />
      </BreadCard>

      <BreadCard>
        <AllBusinesses
          noColor
          type="product"
          heading={['Check Services for every business.']}
          subHeading="Maintain happy customers and your cash flow with faster, simpler, and more secure check services. Find the one that’s right for your business."
          list={BUSINESS_MENU}
        />
      </BreadCard>

      <BreadCard>
        <DiscoverBanner
          type="product"
          heading="Ready to implement a Check Services for your business?"
        />
      </BreadCard>
    </div>
  );
};
