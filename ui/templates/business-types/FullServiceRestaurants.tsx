import { Space, Typography } from 'antd';
import BannerImg from 'public/images/banners/Full Service Restaurants.jpg';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import {
  CloudSystemIcon,
  OnsiteSupportIcon,
  TipPoolingIcon,
  UserFriendlyIcon,
} from '~/ui/img-resource/ImageResources';
import { Banner } from '~/ui/organisms/banner/Banner';

import AlohaImg from 'public/images/businesses/aloha.jpg';
import RevelImg from 'public/images/businesses/revel.jpg';
import ToastImg from 'public/images/businesses/toast.jpg';
import TouchImg from 'public/images/businesses/touch.jpg';

import { RouteConfig } from '@/constants';
import AlohaLogo from 'public/images/service-logos/aloha-color.png';
import RevelLogo from 'public/images/service-logos/revel-color.png';
import ToastLogo from 'public/images/service-logos/toast-color.png';
import TouchLogo from 'public/images/service-logos/touch-color.png';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Heading } from '~/ui/atoms/heading/Heading';
import { BusinessList } from '~/ui/organisms/business-list/BusinessList';
import { SolutionList } from '~/ui/organisms/solution-list/SolutionList';
import styles from './BusinessTypesTemplate.module.scss';

const { Text } = Typography;

const TAGS = ['Table Service Restaurants', 'Diners', 'Bars', 'Cafes', '+ More'];

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
    heading: 'Greeting Visitors',
    items: [
      {
        title: 'Handling Bookings and Waiting Lists',
        description:
          'Allow customers to make online reservations that will be directly stored in your POS, and handle waiting lists when they arrive.',
      },
      {
        title: 'Organize Seating Arrangements',
        description:
          'Greet visitors and make sure they are seated quickly and efficiently using the dynamic floor plan and table mapping functions in the apps provided.',
      },
      {
        title: 'Efficiently Monitor Table Status',
        description:
          'With access to information such as seat times, course numbers, and payment status, our POS systems provide you with real-time updates to improve the dining experience for your guests.',
      },
    ],
  },
  {
    heading: 'Table-side Ordering',
    items: [
      {
        title: 'Speeding Up Order Processing',
        description:
          'Quickly place orders and add specific details, allocate orders to specific courses, and immediately send them to the kitchen.',
      },
      {
        title: 'Customizing Orders with Ease',
        description:
          'Want to add side dishes or condiments? You can personalize orders from any location in the restaurant, while keeping them organized and in sync with the kitchen.',
      },
      {
        title: 'Smooth Kitchen Connection',
        description:
          'Show orders on a kitchen order display or print them on a kitchen printer, to keep everything organized and quickly accessible for your back-of-house staff.',
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
    heading: 'Delivery, Curbside, and Phone Orders',
    items: [
      {
        title: 'Integrate with External Order and Delivery Apps',
        description:
          'Easily connect your Clover device to popular delivery services like Uber Eats, DoorDash, Grubhub, and Chowly through the App Market.',
      },
      {
        title: 'More Convenient Delivery and Pickup',
        description:
          'Ideal for curbside pickup or delivery orders, our POS systems offer increased mobility and flexibility with support for chip, swipe, and contactless payment methods.',
      },
      {
        title: 'Effortlessly Handle Telephone Orders',
        description:
          'You can process payments or issue refunds over the phone or through email without needing to use a separate device.',
      },
    ],
  },
  {
    heading: 'Customer Loyalty and Promotions',
    items: [
      {
        title: 'Develop Customer Loyalty and Promote Your Establishment',
        description:
          'Our POS systems provide features for managing announcements and exciting benefits, making restaurant loyalty programs simpler than ever. Use apps like Promos to generate excitement through text, email, and social media promotions.',
      },
      {
        title: 'Increase Sales with Gift Cards',
        description:
          'Gift Cards help increase sales and customer loyalty with a variety of options and features. Create and order custom or pre-designed physical or digital cards, issue store credit directly from your POS system, allow customers to buy and redeem cards from their smartphones, and much more.',
      },
      {
        title: 'Communicate and Gather Feedback',
        description:
          'Enable private communication with your guests through your POS. Collect feedback, respond to complaints, and address issues before they become public on third-party sites such as Yelp, enabling you to grow your customer base and your revenue.',
      },
    ],
  },
];

export const FullServiceRestaurants = () => {
  return (
    <div>
      <Banner
        type={['business', 'align-left']}
        content={<span>Full Service Restaurants</span>}
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
              <CloudSystemIcon /> <Text className="text-grey">Online ordering</Text>
            </Flex>
            <Flex direction="column" align="center">
              <TipPoolingIcon /> <Text className="text-grey">Tip pooling</Text>
            </Flex>
            <Flex direction="column" align="center">
              <OnsiteSupportIcon /> <Text className="text-grey">Local on-site support</Text>
            </Flex>
            <Flex direction="column" align="center">
              <UserFriendlyIcon /> <Text className="text-grey">User-friendly</Text>
            </Flex>
          </div>
        }
      />

      <BreadCard isGrey>
        <SolutionList
          headings={['Top recommended', ' POS systems for Full Service Restaurants']}
          content={[
            {
              href: RouteConfig.Revel,
              description: 'Customizable POS system for retail, full & quick-service restaurants',
              logo: RevelLogo,
              thumbnail: RevelImg,
              images: [RevelImg, RevelImg],
              os: ['apple'],
            },
            {
              href: RouteConfig.Toast,
              description: 'Toast is a easy-to-use software w/ a sleek station & handheld hardware',
              logo: ToastLogo,
              thumbnail: ToastImg,
              images: [ToastImg, ToastImg],
              os: ['android'],
            },
            {
              href: RouteConfig.Touchbistro,
              description:
                'Revel Systems offers a variety of features including gift cards, loyalty programs, bill splitting',
              logo: TouchLogo,
              thumbnail: TouchImg,
              images: [TouchImg, TouchImg],
              os: ['android', 'windows', 'apple'],
            },
            {
              href: RouteConfig.Aloha,
              description: 'Cloud-enabled platform great for any type of restaurants and bars',
              logo: AlohaLogo,
              thumbnail: AlohaImg,
              images: [AlohaImg, AlohaImg],
              os: ['windows'],
            },
          ]}
        />
      </BreadCard>

      <BreadCard>
        <Heading level={3}>Full Service Restaurant Must-Haves</Heading>
        <div className={styles['business-types_business-list']}>
          {SERVICES.map((item, idx) => (
            <BusinessList {...item} key={`${idx}`} />
          ))}
        </div>
      </BreadCard>
    </div>
  );
};
