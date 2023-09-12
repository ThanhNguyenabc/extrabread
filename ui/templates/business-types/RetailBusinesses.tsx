import { Space, Typography } from 'antd';
import BannerImg from 'public/images/banners/Retail Businesses.jpg';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import {
  CloudSystemIcon,
  ManagementIcon,
  OnsiteSupportIcon,
  UserFriendlyIcon,
} from '~/ui/img-resource/ImageResources';
import { Banner } from '~/ui/organisms/banner/Banner';

import cloverImg from 'public/images/businesses/clover.jpg';
import exatouchImg from 'public/images/businesses/exatouch.jpg';
import lightspeedImg from 'public/images/businesses/lightspeed.jpg';
import revelImg from 'public/images/businesses/revel.jpg';

import cloverLogo from 'public/images/service-logos/clover-color.png';
import exatouchLogo from 'public/images/service-logos/exatouch-color.png';
import lightspeedLogo from 'public/images/service-logos/lightspeed-color.png';
import revelLogo from 'public/images/service-logos/revel-color.png';

import { RouteConfig } from '@/constants';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Heading } from '~/ui/atoms/heading/Heading';
import { BusinessList } from '~/ui/organisms/business-list/BusinessList';
import { SolutionList } from '~/ui/organisms/solution-list/SolutionList';
import styles from './BusinessTypesTemplate.module.scss';

const { Text } = Typography;

const SERVICES: any[] = [
  {
    heading: 'Customer Payments',
    items: [
      {
        title: 'Additional Screens for Increased Freedom',
        description:
          'With both merchant and customer-facing screen options, you can manage the transaction on your end while giving customers the ability to pay using their preferred method.',
      },
      {
        title: 'Efficient and Contactless Payments',
        description:
          'The portability allows customers to quickly handle over-the-counter payments or make contactless payments with ease.',
      },
      {
        title: 'Flexible Payment Processing',
        description:
          'Process payments quickly while in line or anywhere in the store with our POS systems and provide your customers with the convenience of contactless payment options through swiping, dipping, or tapping.',
      },
    ],
  },
  {
    heading: 'Inventory Management',
    items: [
      {
        title: 'Establish SKUs and Variants',
        description:
          'Efficiently manage your products and stock by creating size or style variants that fit your business needs.',
      },
      {
        title: 'Receive Low-Stock Alerts',
        description:
          'Set up inventory management alerts based on your ordering process to avoid missing sales.',
      },
      {
        title: 'Quickly Add or Update Products',
        description:
          'By using accessories like a barcode scanner, you can quickly and efficiently add or update your inventory.',
      },
    ],
  },
  {
    heading: 'Payments Processing and Refunds',
    items: [
      {
        title: 'Speedy Payment Acceptance',
        description:
          'The POS systems retail software quickly accepts credit, debit, gift cards, and mobile payments, and automatically applies pre-set tax rates to each sale.',
      },
      {
        title: 'Operate Offline',
        description:
          'Continue to work even during interruptions by accepting payments in offline mode and processing them when the connection is restored.',
      },
      {
        title: 'Efficient Refund Processing',
        description:
          'Easily process all refunds, even for transactions with multiple payments, and offer store credit.',
      },
    ],
  },
  {
    heading: 'Staff Management',
    items: [
      {
        title: 'Monitor Employee Sales',
        description:
          'Monitor and keep track of sales made by your staff to incentivize top performers and establish commission plans for teams.',
      },
      {
        title: 'Establish Access Controls',
        description:
          'Maintain control over access to confidential business information and records by your staff members.',
      },
      {
        title: 'Efficient Shift Planning',
        description:
          'Easily plan and schedule employee shifts on a weekly, monthly, or yearly basis using the shift management feature.',
      },
    ],
  },
  {
    heading: 'Customer Loyalty Programs',
    items: [
      {
        title: 'Offer Rewards & Send Promotions',
        description:
          'Reach out to your customers through text, email, or receipts with special deals, promotions, and sales.',
      },
      {
        title: 'Gain Customer Insights',
        description:
          'Use our various POS systems to gather immediate feedback from your customers and continuously improve your business.',
      },
      {
        title: 'Increase Sales with Gift Cards',
        description:
          'Enhance your profits and brand by offering custom or pre-designed physical or digital gift cards that can be redeemed using smartphones.',
      },
    ],
  },
];

const TAGS = [
  'Retail Storefronts',
  'Grocery and Convenience',
  'Beauty Salons',
  'Auto Repair',
  '+ More',
];

export const RetailBusinesses = () => {
  return (
    <div>
      <Banner
        type={['business', 'align-left']}
        content={<span>Retail Businesses</span>}
        button={
          <GetPricingButton
            className={styles['business-types_pricing-btn']}
            size="large"
            style={{ paddingInline: 70 }}
          />
        }
        src={BannerImg.src}
        descriptions={
          <div className={styles['business-types_banner-description']}>
            <Text className="font-18-16-16 block mb-24">
              Organize inventory, handle returns seamlessly, accept payments at the touch of a
              button, and manage your staff with retail-ready POS solutions, which are designed to
              help you do more with your store.
            </Text>
            <div className={styles['business-types_tags']}>
              {TAGS.map((item, idx) => (
                <Space key={`${idx}`} size={4}>
                  <Icon name="check" color="grey" style={{ width: 20 }} />
                  <span>{item}</span>
                </Space>
              ))}
            </div>
          </div>
        }
        extractComponent={
          <div className={styles['business-types_banner-footer']}>
            <Text strong className="font-18">
              Point-of-Sale Features
            </Text>
            <Flex direction="column" align="center">
              <CloudSystemIcon /> <Text className="text-grey">Customizable cloud system</Text>
            </Flex>
            <Flex direction="column" align="center">
              <ManagementIcon /> <Text className="text-grey">Great back office management</Text>
            </Flex>
            <Flex direction="column" align="center">
              <UserFriendlyIcon />
              <Text className="text-grey">User-friendly</Text>
            </Flex>
            <Flex direction="column" align="center">
              <OnsiteSupportIcon /> <Text className="text-grey">Local on-site support</Text>
            </Flex>
          </div>
        }
      />

      <BreadCard isGrey>
        <SolutionList
          headings={[
            'Top recommended',
            <>
              {' '}
              POS systems for <br key={'2'} className="hide-pc" /> Retail Businesses
            </>,
          ]}
          content={[
            {
              href: RouteConfig.Revel,
              description:
                'Revel Systems offers a variety of features including gift cards, loyalty programs, bill splitting',
              logo: revelLogo,
              thumbnail: revelImg,
              images: [revelImg, revelImg],
              os: ['apple'],
            },
            {
              href: RouteConfig.Lightspeed,
              description: 'Cloud-based POS system that is great for retailers of all sizes.',
              logo: lightspeedLogo,
              thumbnail: lightspeedImg,
              images: [lightspeedImg, lightspeedImg],
              os: ['android', 'apple'],
            },
            {
              href: RouteConfig.CloverFlex,
              description: 'Easy-to-use software great for retail and any type of restaurant.',
              logo: cloverLogo,
              thumbnail: cloverImg,
              images: [cloverImg, cloverImg],
              os: ['android'],
            },
            {
              href: RouteConfig.Exatouch,
              description: 'Fast, reliable, and affordable POS system for any sized business.',
              logo: exatouchLogo,
              thumbnail: exatouchImg,
              images: [exatouchImg, exatouchImg],
              os: ['windows'],
            },
          ]}
        />
      </BreadCard>

      <BreadCard>
        <Heading level={3}>Retail Businesses Must-Haves</Heading>
        <div className={styles['business-types_business-list']}>
          {SERVICES.map((item, idx) => (
            <BusinessList {...item} key={`${idx}`} />
          ))}
        </div>
      </BreadCard>
    </div>
  );
};
