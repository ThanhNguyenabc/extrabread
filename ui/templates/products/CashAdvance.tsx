import { Space, Typography } from 'antd';
import CashAdvanceProgramBanner from 'public/images/banners/Cash Advance.png';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';
import { ProductFeature } from './components/features/ProductFeature';

import EffortlesslyImg from 'public/images/products/Effortlessly.png';
import FasterFundsImg from 'public/images/products/Faster Funds.png';
import LevelingUpImg from 'public/images/products/Leveling Up.png';
import MitigateRiskImg from 'public/images/products/Mitigate Risk.png';
import { BUSINESS_MENU } from '~/constants/index';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import styles from './ProductsTemplate.module.scss';

const { Text } = Typography;
const BANNER_CONTENT = [
  'Fast approvals within 24-48 hours',
  'Streamlined application process with minimal paperwork',
  'Low rates starting from 1.15%',
  'Renewal options for continued access to funds',
];

export const CashAdvance = () => {
  return (
    <div>
      <Banner
        hasBackground
        type={['product', 'align-left']}
        content={<span>Cash Advance</span>}
        button={<GetPricingButton />}
        src={CashAdvanceProgramBanner.src}
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
          <Text color="green">
            Provides your business with the necessary funding and flexibility
          </Text>

          <Text> to expand operations or weather difficult times with your staff.</Text>
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
              'Easy application process and quick approvals in as little as 24 – 48 hours means you can say goodbye to the long wait times.',
            details: [
              'Dedicated teams for quick application approval',
              'Simple and convenient online application process',
            ],
          }}
        />
        <ProductFeature
          src={MitigateRiskImg}
          alt="Minimal Risk, Maximum Savings"
          content={{
            title: 'Minimal Risk, Maximum Savings',
            description:
              'Provides access to cash at industry-low rates without requiring collateral, offering affordable financial support with added peace of mind',
            details: [
              'Enjoy rates starting as low as 1.15%',
              'Access cash without needing to provide personal guarantee or collateral',
            ],
          }}
        />
        <ProductFeature
          reversed
          src={EffortlesslyImg}
          alt="Faster Credit Approval"
          content={{
            title: 'Faster Credit Approval',
            description:
              'Cash advances are tailored to provide funding even if you have imperfect credit, so you can still access the financial support you need for your business.',
            details: [
              'Benefit from a quicker application process and shorter waiting period',
              'Approval decisions are based on your projected sales, not your credit score',
            ],
          }}
        />
        <ProductFeature
          src={LevelingUpImg}
          alt="Leveling Up Your Business"
          content={{
            title: 'Leveling Up Your Business',
            description:
              'We are dedicated to providing you with the funds you need to achieve your short-term objectives and long-term business goals.',
            details: ['Amazing cash advances', 'Helping small and big businesses all over'],
          }}
        />
      </BreadCard>

      <BreadCard>
        <AllBusinesses
          noColor
          type="product"
          heading={['Cash Advance for every business.']}
          subHeading="Eliminate manual bookkeeping for good with QuickBooks Plugin. Find the one that’s right for your business."
          list={BUSINESS_MENU}
        />
      </BreadCard>

      <BreadCard>
        <DiscoverBanner
          type="product"
          heading="Ready to implement a Cash Discount Program for your business?"
        />
      </BreadCard>
    </div>
  );
};
