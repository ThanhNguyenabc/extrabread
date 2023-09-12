import { Space, Typography } from 'antd';
import BannerImg from 'public/images/banners/Small Businesses.jpg';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import {
  AcceptAllPaymentIcon,
  FastCheckoutIcon,
  OnsiteSupportIcon,
  UserFriendlyIcon,
} from '~/ui/img-resource/ImageResources';
import { Banner } from '~/ui/organisms/banner/Banner';

import cloverImg from 'public/images/businesses/clover-2.jpg';
import exatouchImg from 'public/images/businesses/exatouch.jpg';
import revelImg from 'public/images/businesses/revel.jpg';
import toastImg from 'public/images/businesses/toast.jpg';

import cloverLogo from 'public/images/service-logos/clover-color.png';
import exatouchLogo from 'public/images/service-logos/exatouch-color.png';
import revelLogo from 'public/images/service-logos/revel-color.png';
import toastLogo from 'public/images/service-logos/toast-color.png';

import { RouteConfig } from '@/constants';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Heading } from '~/ui/atoms/heading/Heading';
import { BusinessList } from '~/ui/organisms/business-list/BusinessList';
import { SolutionList } from '~/ui/organisms/solution-list/SolutionList';
import styles from './BusinessTypesTemplate.module.scss';

const { Text } = Typography;

const SERVICES: any[] = [
  {
    heading: 'Customizable cloud system',
    items: [
      {
        title: 'Online Data Storage',
        description:
          'Instead of being stored on a local computer or server, the point-of-sale systems process and store the data online, making it accessible from anywhere with internet connection',
      },
      {
        title: 'Fast Processing',
        description:
          'Allow for faster transactions with a wider range of payment options with a system that has been improved for increased speed and accuracy.',
      },
      {
        title: 'Keep Your Business Running',
        description:
          'In the event of a crash or malfunction, you can easily retrieve your data due to a secure backup system and know that all your important business information is protected at all times',
      },
    ],
  },
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

const TAGS = ['Casual Dining', 'Coffee Shops', 'Retail', 'Bakeries', '+ More'];

export const SmallBusiness = () => {
  return (
    <div>
      <Banner
        type={['business', 'align-left']}
        content={<span>Small Business</span>}
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
              When operating your restaurant tableside, you&#39;re going to be in need of a
              point-of-sale system that allows for built-in dining solutions to provide you and your
              customers an easy experience
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
              <AcceptAllPaymentIcon /> <Text className="text-grey">Accept all payment forms</Text>
            </Flex>
            <Flex direction="column" align="center">
              <FastCheckoutIcon /> <Text className="text-grey">Fast checkout</Text>
            </Flex>
            <Flex direction="column" align="center">
              <UserFriendlyIcon /> <Text className="text-grey">User Friendly</Text>
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
            'Top recommended ',
            <>
              POS systems <br className="hide-pc" /> for Small Businesses
            </>,
          ]}
          content={[
            {
              href: RouteConfig.CloverFlex,
              description: 'Easy-to-use software great for retail and any type of restaurant.',
              logo: cloverLogo,
              thumbnail: cloverImg,
              images: [cloverImg, cloverImg],
              os: ['android'],
            },
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
              href: RouteConfig.Toast,
              description: 'Toast is a easy-to-use software w/ a sleek station & handheld hardware',
              logo: toastLogo,
              thumbnail: toastImg,
              images: [toastImg, toastImg],
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
        <Heading level={3}>Small Businesses Must-Haves</Heading>
        <div className={styles['business-types_business-list']}>
          {SERVICES.map((item, idx) => (
            <BusinessList {...item} key={`${idx}`} column={3} />
          ))}
        </div>
      </BreadCard>
    </div>
  );
};
