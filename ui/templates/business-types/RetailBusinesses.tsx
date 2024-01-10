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
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Heading } from '~/ui/atoms/heading/Heading';
import { BusinessList } from '~/ui/organisms/business-list/BusinessList';
import { SolutionList } from '~/ui/organisms/solution-list/SolutionList';
import styles from './BusinessTypesTemplate.module.scss';

const { Text } = Typography;

const ICONS = [CloudSystemIcon, ManagementIcon, UserFriendlyIcon, OnsiteSupportIcon];

export const RetailBusinesses = () => {
  const { t } = useTranslation('retail_business');
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
        content={<span> {common('business_categories.retail')}</span>}
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
            {Features.map(({ text, icon: Icon }) => (
              <Flex direction="column" align="center">
                <Icon />
                <Text className="text-grey">{text}</Text>
              </Flex>
            ))}
          </div>
        }
      />

      <BreadCard isGrey>
        <SolutionList
          headings={[
            common('top_recommend'),
            <>
              {common('pos_system_for')} <br key={'2'} className="hide-pc" />{' '}
              {common('business_categories.retail')}
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
        <Heading level={3}>{t('title')}</Heading>
        <div className={styles['business-types_business-list']}>
          {Services.map((item, idx) => (
            <BusinessList {...item} key={`${idx}`} />
          ))}
        </div>
      </BreadCard>
    </div>
  );
};
