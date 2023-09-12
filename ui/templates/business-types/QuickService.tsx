import { Space, Typography } from 'antd';
import BannerImg from 'public/images/banners/Quick Service Restaurants.jpg';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import {
  FastCheckoutIcon,
  OnlineOrderingIcon,
  OnsiteSupportIcon,
  UserFriendlyIcon,
} from '~/ui/img-resource/ImageResources';
import { Banner } from '~/ui/organisms/banner/Banner';

import brinkImg from 'public/images/businesses/brink.jpg';
import cloverImg from 'public/images/businesses/clover-2.jpg';
import revelImg from 'public/images/businesses/revel.jpg';
import toastImg from 'public/images/businesses/toast.jpg';

import brinkLogo from 'public/images/service-logos/brink-color.png';
import cloverLogo from 'public/images/service-logos/clover-color.png';
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
    heading: 'Tableside Ordering',
    items: [
      {
        title: 'Faster Orders',
        description:
          'Easily transmit orders, which allows you to add in-depth modifiers with Order Note, organize orders into specific courses, and send them to the kitchen with just a touch of a button.',
      },
      {
        title: 'Easily Personalize Orders',
        description:
          'You can make adjustments to any order from anywhere in the restaurant, including adding sides or condiments, while keeping everything organized and in sync with the kitchen.',
      },
      {
        title: 'Smooth Kitchen Connection',
        description:
          'Orders can be displayed on a kitchen display screen or printed on a kitchen printer, allowing for a seamless and quick submission to your back-of-house staff, ensuring a streamlined operation.',
      },
    ],
  },
  {
    heading: 'Online Ordering',
    items: [
      {
        title: 'Accept Online Orders with Ease',
        description: `Accept orders directly from your website, or use the online ordering service to create a personalized web page through the app if you don't already have a website.`,
      },
      {
        title: 'Quickly Upload Your Menu',
        description:
          'Simply provide your menu when signing up, and we will add it to your online ordering platform at no cost.',
      },
      {
        title: 'Efficiently Handle Order Processing',
        description:
          'Send orders directly to your kitchen or POS, and manage pickup orders easily using your device.',
      },
    ],
  },
  {
    heading: 'Delivery, Curbside, and Phone Orders Made Easy',
    items: [
      {
        title: 'Orders & Delivery Using Third-Party Apps',
        description: `With our wide range of various POS systems, it's easy to manage delivery orders using popular third-party services such as Uber Eats, DoorDash, Grubhub, and etc. through the App Market.`,
      },
      {
        title: 'Make Curbside Pickups & Delivery a Breeze',
        description:
          'Make curbside pickups and deliveries more convenient with chip, swipe, and contactless payment options.',
      },
      {
        title: 'Accept Phone Orders with Ease',
        description:
          'Take payments or process refunds over the phone or by email, without the need for a separate device.',
      },
    ],
  },
  {
    heading: 'Making Payments',
    items: [
      {
        title: 'Accept Payments Anywhere',
        description:
          'Provide multiple payment options such as credit, debit, mobile, gift cards, checks, and contactless payments like Apple Pay and Google Pay, enabling you to take payments tableside, at the counter or while on-the-go.',
      },
      {
        title: 'Easy Bill Splitting',
        description: `You can split the bill as per your customer's preference, be it by guest, item, or custom amount, making the process simpler and more efficient.`,
      },
      {
        title: 'Continue Business Operations Even Without WiFi',
        description:
          'Certain POS systems have built-in WiFi, allowing you to keep your restaurant running smoothly even when your internet connection is down.',
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

const TAGS = ['Casual Dining', 'Coffee Shops', 'Bakeries', '+ More'];

export const QuickService = () => {
  return (
    <div>
      <Banner
        type={['business', 'align-left']}
        content={<span>Quick Service Restaurants</span>}
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
              With our wide range of POS systems, your counter service restaurant can operate with
              efficiency and organization. The devices are designed to accommodate any space and
              offer quick and straightforward functionality.
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
              <FastCheckoutIcon /> <Text className="text-grey">Fast checkout</Text>
            </Flex>
            <Flex direction="column" align="center">
              <OnlineOrderingIcon /> <Text className="text-grey">Online Ordering</Text>
            </Flex>
            <Flex direction="column" align="center">
              <OnsiteSupportIcon /> <Text className="text-grey">Local on-site support</Text>
            </Flex>
            <Flex direction="column" align="center">
              <UserFriendlyIcon /> <Text className="text-grey">User friendly</Text>
            </Flex>
          </div>
        }
      />

      <BreadCard isGrey>
        <SolutionList
          headings={['Top recommended', ' POS systems for Quick Service Restaurants']}
          content={[
            {
              href: RouteConfig.Brink,
              description: 'Customizable point-of-sale system for full & quick-service restaurants',
              logo: brinkLogo,
              thumbnail: brinkImg,
              images: [brinkImg, brinkImg],
              os: ['windows'],
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
              href: RouteConfig.CloverDuo,
              description: 'Easy-to-use software great for retail and any type of restaurant.',
              logo: cloverLogo,
              thumbnail: cloverImg,
              images: [cloverImg, cloverImg],
              os: ['android'],
            },
          ]}
        />
      </BreadCard>

      <BreadCard>
        <Heading level={3}>Quick Service Restaurants Must-Haves</Heading>
        <div className={styles['business-types_business-list']}>
          {SERVICES.map((item, idx) => (
            <BusinessList {...item} key={`${idx}`} />
          ))}
        </div>
      </BreadCard>
    </div>
  );
};
