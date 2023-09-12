import { Space, Typography } from 'antd';
import BannerImg from 'public/images/banners/Pizzerias.jpg';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import {
  ItemManagementIcon,
  ManagementIcon,
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
          'Instead of being stored on a local computer or server, the point-of-sale systems process and store the data online, making it accessible from anywhere with internet connection.',
      },
      {
        title: 'Fast Processing',
        description:
          'Allow for faster transactions with a wider range of payment options with a system that has been improved for increased speed and accuracy.',
      },
      {
        title: 'Keep Your Business Running',
        description:
          'In the event of a crash or malfunction, you can easily retrieve your data due to a secure backup system and know that all your important business information is protected at all times.',
      },
    ],
  },
  {
    heading: 'Menu Management',
    items: [
      {
        title: 'Easy Menu Build',
        description:
          'Efficiently create menus, transmit orders to the kitchen, and promptly modify tickets as needed to guarantee that your customers receive the items they requested. Additionally, effortlessly establish tabs and divide orders using the platform.',
      },
      {
        title: 'Modifiers Made Simple',
        description:
          'Special requests can be easily accommodated by servers through the use of customized modifiers.',
      },
      {
        title: 'Effortlessly Handle Takeout Orders',
        description:
          'To simplify operations and minimize confusion, takeout and delivery orders can be viewed separately from dine-in orders.',
      },
    ],
  },
  {
    heading: 'Inventory Management',
    items: [
      {
        title: 'No Shortages',
        description:
          'Make sure to directly oversee your inventory so that you can avoid letting down customers due to shortages of food or products.',
      },
      {
        title: 'Focus on Customer Interaction',
        description:
          'Created to assist you in minimizing the amount of time you spend facing the computer and maximizing the time you spend interacting with your customers.',
      },
      {
        title: 'Waste Nothing',
        description:
          'Ensure that that the restaurant always has the necessary ingredients on hand and that no ingredients are going to waste.',
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
];

const TAGS = ['Pizzerias', '+ More'];

export const Pizzerias = () => {
  return (
    <div>
      <Banner
        type={['business', 'align-left']}
        content={<span>Pizzerias</span>}
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
              If you operate a pizzeria, you&#39;ll be in need of a point-of-sale system that can
              manage a fast-paced atmosphere, enable prompt and seamless transactions, and easily
              accommodate modifications and customizations to orders.
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
              <ItemManagementIcon /> <Text className="text-grey">Manage Inventory</Text>
            </Flex>
            <Flex direction="column" align="center">
              <ManagementIcon /> <Text className="text-grey">Great back office management</Text>
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
          headings={['Top recommended', ' POS systems for Pizzerias']}
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
        <Heading level={3}>Pizzeria Must-Haves</Heading>
        <div className={styles['business-types_business-list']}>
          {SERVICES.map((item, idx) => (
            <BusinessList {...item} key={`${idx}`} column={3} />
          ))}
        </div>
      </BreadCard>
    </div>
  );
};
