import { Space, Typography } from 'antd';
import BannerImg from 'public/images/banners/Bar Night.jpg';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import {
  EfficientFastIcon,
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
    heading: 'Customizable Cloud System',
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
    heading: 'Liquor Inventory Management',
    items: [
      {
        title: 'No Shortages',
        description:
          'Make sure to directly oversee your inventory & receive alerts when supplies are low so that you can avoid letting down customers due to shortages.',
      },
      {
        title: 'Focus on Customer Interaction',
        description:
          'Created to assist you in minimizing the amount of time you spend facing the computer and maximizing the time you spend interacting with your customers.',
      },
      {
        title: 'Waste Nothing',
        description:
          'Ensure that that the bar always has the necessary ingredients on hand and that no ingredients are going to waste.',
      },
    ],
  },
  {
    heading: 'Seamless Coordination',
    items: [
      {
        title: 'Guest-Led Ordering',
        description:
          'Use a mobile app that enables customers to browse menus, place orders for drinks, and make payments with no wait.',
      },
      {
        title: 'Keep it Going',
        description:
          'With a bar POS system, pre-authorizing credit and debit cards simplifies operations and enhances the guest experience.',
      },
      {
        title: 'No restrictions, no requirements, no complications.',
        description:
          'Allow your guests to split the bill as they wish: by guest, item, or a custom amount.',
      },
    ],
  },
  {
    heading: 'Bar & Club Management Tools',
    items: [
      {
        title: 'Tab Management',
        description:
          'The POS system should be able to manage tabs efficiently, allowing customers to open and close tabs as needed and transfer them between servers or bartenders.',
      },
      {
        title: 'Drink Pricing and Menu Management',
        description:
          'A bar or club POS system should be able to handle a wide range of drink pricing and menu options, including specials, discounts, and seasonal drinks.',
      },
      {
        title: 'Tip Management',
        description:
          'The POS system should allow customers to add tips to their bills easily, with the option to leave a percentage or dollar amount.',
      },
    ],
  },
];

const TAGS = ['Bars', 'Night Clubs', '+ More'];

export const BarNightClubs = () => {
  return (
    <div>
      <Banner
        type={['business', 'align-left']}
        content={<>Bar & Night Clubs</>}
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
              When operating a bar and night club, you&#39;re going to be in need of a point-of-sale
              system that can keep up with a fast paced environment allowing for efficient and
              effortless transactions.
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
              <UserFriendlyIcon /> <Text className="text-grey">User Friendly</Text>
            </Flex>
            <Flex direction="column" align="center">
              <OnsiteSupportIcon /> <Text className="text-grey">Local on-site support</Text>
            </Flex>
            <Flex direction="column" align="center">
              <ManagementIcon /> <Text className="text-grey">Back office management</Text>
            </Flex>
            <Flex direction="column" align="center">
              <EfficientFastIcon /> <Text className="text-grey">Efficient fast bar menu</Text>
            </Flex>
          </div>
        }
      />

      <BreadCard isGrey>
        <SolutionList
          headings={['Top recommended', ' POS systems for Bars & Night Clubs']}
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
        <Heading level={3}>Bar & Night Clubs Must-Haves</Heading>
        <div className={styles['business-types_business-list']}>
          {SERVICES.map((item, idx) => (
            <BusinessList {...item} key={`${idx}`} column={3} />
          ))}
        </div>
      </BreadCard>
    </div>
  );
};
