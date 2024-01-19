import { Space, Typography } from 'antd';
import GiftCardProgramBanner from 'public/images/banners/Gift Card Program.png';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Heading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import { Banner } from '~/ui/organisms/banner/Banner';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';
import { ProductFeature } from './components/features/ProductFeature';

import BoostSalesImg from 'public/images/products/Boost Sales.png';
import DigitalCardsImg from 'public/images/products/Digital cards.png';
import PhysicalCrdsImg from 'public/images/products/Physical cards.png';
import PreventFraudActivitiesImg from 'public/images/products/Prevent Fraud Activities.png';

import Image from 'next/image';
import styles from './ProductsTemplate.module.scss';

const { Text } = Typography;

const BANNER_CONTENT = [
  'Wide range of designs to pick from',
  'Enable customers to purchase and redeem via their mobile phones',
  'Minimize the risk of fraudulent activities with both physical and digital cards',
  'Boost revenue and improve sales performance',
];

export const GiftCardProgram = () => {
  return (
    <div className={styles['gift-card']}>
      <Banner
        hasBackground
        type={['product', 'align-left']}
        content={<span>Gift Card Program</span>}
        button={<GetPricingButton />}
        src={GiftCardProgramBanner.src}
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
          <Text color="green">ExtraBread&#39;s Gift Card Program by Elecpayments Inc.</Text>
          <Text>
            {' '}
            provides both physical and digital gift card options, complete with essential features
            to help boost your brand, customer base, and sales.
          </Text>
        </div>
      </BreadCard>

      <BreadCard>
        <div className={styles['gift-card_card-row']}>
          <div className={styles['gift-card_text']}>
            <Heading level={4} className={styles['gift-card-heading']}>
              Improve Customer Loyalty with Physical or Digital Cards
            </Heading>
            <Text className="font-18 text-grey">
              Merchants can choose between physical or digital gift cards and enjoy the benefits of
              a comprehensive program that offers custom options, quick setup, and a range of
              features to drive loyalty and boost sales.
            </Text>
          </div>
          <div className={styles['gift-card_card-red']}>
            <div>
              <Heading level={4} className="mb-8">
                Physical cards
              </Heading>
              <Text className="font-16-16-14">
                Choose from a wide range of design templates or upload your own
              </Text>
            </div>
            <Image width={376} src={PhysicalCrdsImg} alt="Physical Crds" quality={100} />
          </div>
          <div className={styles['gift-card_card-blue']}>
            <div>
              <Heading level={4} className="mb-8">
                Digital cards
              </Heading>
              <Text className="font-16-16-14">Redeem gift cards that work on any smart device</Text>
            </div>
            <Image width={376} src={DigitalCardsImg} alt="Digital Cards" quality={100} />
          </div>
        </div>
      </BreadCard>

      <BreadCard className={styles['product-items']} noPadding>
        <ProductFeature
          src={BoostSalesImg}
          alt="Boost Sales"
          content={{
            title: 'Boost Sales',
            description:
              'With our gift cards, you can simplify your checkout process and effortlessly issue store credit, leading to increased sales and improved customer loyalty.',
            details: [
              'Issue store credit directly from yor device',
              `Accept gift cards from customers' mobile phones with our gift cards`,
            ],
          }}
        />
        <ProductFeature
          reversed
          src={PreventFraudActivitiesImg}
          alt="Prevent Fraud Activities"
          content={{
            title: 'Prevent Fraud Activities',
            description:
              'Digital or physical card options provide greater security and peace of mind as compared to gift certificates, which are prone to being lost, stolen, or counterfeited',
            details: [
              'Convenience of managing card inventory easily',
              'Keeping track of sales through gift card reports',
            ],
          }}
        />
      </BreadCard>

      <BreadCard>
        <AllBusinesses
          noColor
          type="product"
          heading={'Gift Card Program for all types of business'}
          subHeading="Learn more about how we can help your business."
        />
      </BreadCard>

      <BreadCard>
        <DiscoverBanner
          type="product"
          heading="Ready to implement a Gift Card Program for your business?"
        />
      </BreadCard>
    </div>
  );
};
