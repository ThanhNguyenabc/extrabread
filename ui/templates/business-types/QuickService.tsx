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
} from '~/ui/img-resource/ExIcon';
import { Banner } from '~/ui/organisms/banner/Banner';

import brinkImg from 'public/images/businesses/brink.jpg';
import cloverImg from 'public/images/businesses/clover-2.jpg';
import revelImg from 'public/images/businesses/revel.jpg';
import toastImg from 'public/images/businesses/toast.jpg';

import brinkLogo from 'public/images/service-logos/brink-color.png';
import cloverLogo from 'public/images/service-logos/clover-color.png';
import revelLogo from 'public/images/service-logos/revel-color.png';
import toastLogo from 'public/images/service-logos/toast-color.png';

import { RouteConfig } from '@/constants/routes';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Heading } from '~/ui/atoms/heading/Heading';
import { BusinessList } from '~/ui/organisms/business-list/BusinessList';
import { SolutionList } from '~/ui/organisms/solution-list/SolutionList';
import styles from './BusinessTypesTemplate.module.scss';

const { Text } = Typography;

const ICONS = [FastCheckoutIcon, OnlineOrderingIcon, OnsiteSupportIcon, UserFriendlyIcon];

export const QuickService = () => {
  const { t } = useTranslation('quick_service');
  const { t: common } = useTranslation();

  const Services = useMemo(() => {
    return t('services.items', { returnObjects: true }) as Array<any>;
  }, [t]);

  const Features = useMemo(() => {
    return (t('features', { returnObjects: true }) as string[]).map((item, index) => ({
      icon: ICONS[index],
      text: item,
    }));
  }, [common]);

  const Tags = useMemo(() => {
    return t('tags', { returnObjects: true }) as string[];
  }, [t]);

  return (
    <div>
      <Banner
        type={['business', 'align-left']}
        content={<span>{common('business_categories.quick_service')}</span>}
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
            <Text className="font-18-16-16 block mb-24">{t('desc')}</Text>
            <div className={styles['business-types_tags']}>
              {Tags?.map((item, idx) => (
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
              {common('point_of_sale_features.heading')}
            </Text>
            {Features?.map(({ text, icon: Icon }) => (
              <Flex key={text} direction="column" align="center">
                <Icon />
                <Text className="text-grey">{text}</Text>
              </Flex>
            ))}
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
        <Heading level={3}>{`${common('business_categories.quick_service')} ${common(
          'must_have',
        )}`}</Heading>
        <div className={styles['business-types_business-list']}>
          {Services?.map((item, idx) => (
            <BusinessList {...item} key={`${idx}`} />
          ))}
        </div>
      </BreadCard>
    </div>
  );
};
