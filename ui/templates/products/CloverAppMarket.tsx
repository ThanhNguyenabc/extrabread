import { Row, Space, Tabs, Typography } from 'antd';
import CloverAppMarketBanner from 'public/images/banners/Clover App Market.png';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';
import styles from './ProductsTemplate.module.scss';

// Images
import Image from 'next/image';
import AdpTimeIcon from 'public/images/products/ADP Time.png';

import AbreezeLinkIcon from 'public/images/products/Abreeze Link.png';
import AppointmentsProIcon from 'public/images/products/Appointments Pro.png';
import BookerCloverMiniConnectorIcon from 'public/images/products/Booker-Clover Mini Connector.png';
import CloverAppImg from 'public/images/products/Clover App.png';
import CloverDiningIcon from 'public/images/products/Clover Dining.png';
import DavoAutomatedSalesTaxIcon from 'public/images/products/Davo Automated Sales Tax.png';
import FeedbackIcon from 'public/images/products/Feedback.png';
import GiftCardImg from 'public/images/products/Gift Cards.png';
import GustoIcon from 'public/images/products/Gusto.png';
import KitchenDisplayIcon from 'public/images/products/Kitchen Display.png';
import MainStreetInsightsIcon from 'public/images/products/Main Street Insights.png';
import OrderOutIcon from 'public/images/products/Order Out.png';
import Promos1Icon from 'public/images/products/Promos.png';
import QuickbooksByCommerceSyncIcon from 'public/images/products/Quickbooks by Commerce Sync.png';
import Rewards1Icon from 'public/images/products/Rewards.png';
import RunPoweredIcon from 'public/images/products/RUN Powered.png';
import SalonSchedulerIcon from 'public/images/products/Salon Scheduler.png';
import ScheduleIcon from 'public/images/products/Schedule.png';
import ShiftsIcon from 'public/images/products/Shifts.png';
import ShopventoryIcon from 'public/images/products/Shopventory.png';
import SimpleOrderIcon from 'public/images/products/Simple Order.png';
import StockitIcon from 'public/images/products/StockIt.png';
import TimeClockIcon from 'public/images/products/Time Clock.png';
import YelpForBusinessOwnersIcon from 'public/images/products/Yelp for Business Owners.png';

import { GiftCardIcon, PromosIcon, RewardIcon } from '@/ui/img-resource/ExIcon';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { useDevice } from '~/hooks/useDetectMobile';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Heading } from '~/ui/atoms/heading/Heading';
import SafeHydrate from '~/ui/atoms/safe-hydrate';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import { DetailSolution } from '../../organisms/detail-solution/DetailSolution';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';

const { Text } = Typography;

const CUSTOMER_ICONS = [PromosIcon, RewardIcon, GiftCardIcon];

const TYPES_OF_APPS_ICONS = {
  promos: Promos1Icon,
  rewards: Rewards1Icon,
  gifts: GiftCardImg,
  shifts: ShiftsIcon,
  time: TimeClockIcon,
  adp_time: AdpTimeIcon,
  gusto: GustoIcon,
  run_power: RunPoweredIcon,
  schedule: ScheduleIcon,
  insights: MainStreetInsightsIcon,
  quickbooks: QuickbooksByCommerceSyncIcon,
  sale_tax: DavoAutomatedSalesTaxIcon,
  feedback: FeedbackIcon,
  business: YelpForBusinessOwnersIcon,
  contact: AbreezeLinkIcon,
  dining: CloverDiningIcon,
  order: OrderOutIcon,
  kitchen: KitchenDisplayIcon,
  shopventory: ShopventoryIcon,
  simple_order: SimpleOrderIcon,
  stockIt: StockitIcon,
  appointments: AppointmentsProIcon,
  salon: SalonSchedulerIcon,
  connector: BookerCloverMiniConnectorIcon,
};

const AppRow = ({
  heading,
  items,
}: {
  heading?: string;
  items: {
    id: string;
    title: string;
    desc: string;
  }[];
}) => {
  return (
    <Row className={styles['clover-app_row']}>
      {heading && (
        <div>
          <Text className={styles['clover-app_row-heading']}> {heading}</Text>
        </div>
      )}
      {items.map((item, idx) => (
        <div key={`${idx}`} className={styles['clover-app_app-item']}>
          <Image width={40} src={TYPES_OF_APPS_ICONS[item.id]} alt="app-img" quality={100} />
          <Text strong className={styles['clover-app_app-item-title']}>
            {item.title}
          </Text>
          <Text className={styles['clover-app_app-item-decs']}>{item.desc}</Text>
        </div>
      ))}
    </Row>
  );
};

export const CloverAppMarket = () => {
  const { isMobile } = useDevice();
  const { t } = useTranslation('clover_market');
  const { t: common } = useTranslation();

  const BANNER_CONTENT = useMemo(() => {
    return t('banner', { returnObjects: true }) as string[];
  }, [t]);

  const TYPES_OF_APPS = useMemo(() => {
    return t('type_of_apps', { returnObjects: true }) as Array<any>;
  }, [t]);

  const CUSTOMERS = useMemo(() => {
    return (t('customers', { returnObjects: true }) as Array<any>)?.map((item, index) => ({
      ...item,
      icon: CUSTOMER_ICONS[index],
    }));
  }, [t]);

  return (
    <div>
      <Banner
        hasBackground
        type={['product', 'align-left']}
        content={<span>{common('product_types.market.title')}</span>}
        button={<GetPricingButton />}
        src={CloverAppMarketBanner.src}
        descriptions={
          <Space direction="vertical">
            {Array.isArray(BANNER_CONTENT) &&
              BANNER_CONTENT?.map((item, idx) => (
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
      <BreadCard noPadding>
        <div className={styles['clover-app_main']}>
          <div>
            <Image
              width={479}
              height={485}
              quality={100}
              src={CloverAppImg.src}
              alt="CloverAppImg"
            />
          </div>

          <div>
            <Heading
              level={3}
              className={styles['clover-app_row-heading']}
              style={{ lineHeight: 1 }}
            >
              {t('heading')}
            </Heading>
            <Text className="font-18-16-16 text-grey block">{t('desc')}</Text>
          </div>
        </div>
      </BreadCard>

      <BreadCard>
        <DetailSolution type="product" heading={t('loyalty_heading')} data={CUSTOMERS} />
      </BreadCard>

      <BreadCard isGrey>
        <Heading centered level={3} className={classNames('hide-sp')}>
          {t('type_of_app_title')}
        </Heading>

        <div className={styles['clover-app_app-items']}>
          {isMobile ? (
            <SafeHydrate>
              <Tabs
                defaultActiveKey="0"
                // style={{ height: 488 }}
                items={TYPES_OF_APPS.map((item, i) => {
                  const key = String(i);
                  return {
                    key,
                    label: item.heading,
                    children: <AppRow items={item.items} />,
                  };
                })}
              />
            </SafeHydrate>
          ) : (
            TYPES_OF_APPS.map((item, idx) => (
              <AppRow key={`${idx}`} heading={item.heading} items={item.items} />
            ))
          )}
        </div>
      </BreadCard>

      <BreadCard>
        <AllBusinesses
          noColor
          type="product"
          heading={t('all_business_heading')}
          subHeading={common('learn_more_business')}
        />
      </BreadCard>

      <BreadCard>
        <DiscoverBanner type="product" heading={t('footer_heading')} />
      </BreadCard>
    </div>
  );
};
