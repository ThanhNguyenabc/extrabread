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

import { useTranslation } from 'next-i18next';
import AlohaLogo from 'public/images/service-logos/aloha-color.png';
import RevelLogo from 'public/images/service-logos/revel-color.png';
import ToastLogo from 'public/images/service-logos/toast-color.png';
import TouchLogo from 'public/images/service-logos/touch-color.png';
import { useMemo } from 'react';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Heading } from '~/ui/atoms/heading/Heading';
import { BusinessList } from '~/ui/organisms/business-list/BusinessList';
import { SolutionList } from '~/ui/organisms/solution-list/SolutionList';
import styles from './BusinessTypesTemplate.module.scss';
import { RouteConfig } from '@/constants/routes';

const { Text } = Typography;

const ICONS = [CloudSystemIcon, OnsiteSupportIcon, TipPoolingIcon, UserFriendlyIcon];

export const FullServiceRestaurants = () => {
  const { t } = useTranslation('full_service');
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
        content={<span>{common('business_categories.full_service')}</span>}
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
          headings={[
            common('top_recommend'),
            ` ${common('pos_system_for')} ${common('business_categories.full_service')}`,
          ]}
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
        <Heading level={3}>{`${common('business_categories.full_service')} ${common(
          'must_have',
        )}`}</Heading>
        <div className={styles['business-types_business-list']}>
          {Services.map((item, idx) => (
            <BusinessList {...item} key={`${idx}`} />
          ))}
        </div>
      </BreadCard>
    </div>
  );
};
