import { Space, Typography } from 'antd';
import LoyaltyRewardsBanner from 'public/images/banners/Loyalty Rewards.png';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';
import { ProductFeature } from './components/features/ProductFeature';

import BoostSalesImg from 'public/images/products/Boost Sales.png';
import DriveSalesImg from 'public/images/products/Drive Sales.png';
import NeverMissImg from 'public/images/products/Never Miss A Sale.png';
import PersonalizeYourProgramsImg from 'public/images/products/Personalize Your Programs.png';

import styles from './ProductsTemplate.module.scss';

const { Text } = Typography;
const BANNER_CONTENT = [
  'Offer incentives to the customers',
  'Provide rewards to customers',
  'Use analytic tools to keep track of customer behaviors',
  'Focus on building strong relationships',
];

export const LoyaltyRewards = () => {
  return (
    <div>
      <Banner
        hasBackground
        type={['product', 'align-left']}
        content={<span>Customer Loyalty & Rewards</span>}
        button={<GetPricingButton />}
        src={LoyaltyRewardsBanner.src}
        descriptions={
          <Space direction="vertical">
            {BANNER_CONTENT.map((item, idx) => (
              <Space
                key={`${idx}`}
                size={16}
                align="baseline"
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
          <Text color="green">Our customized Loyalty & Rewards Program by Elecpayments</Text>{' '}
          <Text>
            can assist you in attracting new customers and incentivizing your existing clientele.
          </Text>
        </div>
      </BreadCard>

      <BreadCard>
        <ProductFeature
          reversed
          src={NeverMissImg}
          alt="Never Miss A Sale"
          content={{
            title: 'Engaging with Customers',
            description:
              'Create a personalized customer experience by providing exclusive perks that are simple to establish.',
            details: [
              'Customize your program to align with your business needs and design various rewards to attract a broader range of customers.',
              'Customers receive notifications when they earn a reward, and they can redeem it during checkout.',
            ],
          }}
        />
        <ProductFeature
          src={BoostSalesImg}
          alt="Boost Sales"
          content={{
            title: 'Simplify your Sales Process',
            description:
              'Transform your rewards program into a robust sales tool with practical, ready-to-use solutions.',
            details: [
              'Monitor customer analytics and usage through a user-friendly dashboard.',
              'Speed up transactions with touchless payment alternatives to reduce wait times.',
            ],
          }}
        />
        <ProductFeature
          reversed
          src={PersonalizeYourProgramsImg}
          alt="Personalize Your Programs"
          content={{
            title: 'Personalize Your Programs',
            description:
              'With various customer engagement options and adaptable levels that align with your brand, business model, and customer preferences, personalizing your program is effortless and impactful.',
            details: [
              'Design in-store marketing materials and promotional signage.',
              'Select between a punch-based or points-based system.',
            ],
          }}
        />
        <ProductFeature
          src={DriveSalesImg}
          alt="Drive Sales"
          content={{
            title: 'Drive Sales',
            description:
              'Attract new customers and incentivize them to return with promotional programs that generate interest and boost your profits.',
            details: [
              'Dispatch digital offers, in-store coupons, and real-time promotions directly from your POS.',
              'Certain promos are pre-installed and ready to use.',
            ],
          }}
        />
      </BreadCard>

      <BreadCard>
        <DiscoverBanner
          type="product"
          heading="Ready to implement a Customer Loyalty & Rewards for your business?"
        />
      </BreadCard>
    </div>
  );
};
