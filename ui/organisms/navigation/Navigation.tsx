import { Menu, Space, Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';
import {
  BUSINESS_MENU,
  EQUIPMENTS_MENU,
  NavigationLabel,
  PRODUCTS_MENU,
  RouteConfig,
  SOLUTIONS_MENU,
} from '~/constants/index';
import { Container } from '~/ui/atoms/container/Container';
import { Icon } from '~/ui/atoms/icon/Icon';
import styles from './Navigation.module.scss';

const { Text } = Typography;

type CardProp = {
  title?: string;
  description?: string;
  href: string;
  src?: any;
};

const SolutionCard = ({ title, description, src, href }: CardProp) => {
  const { t } = useTranslation();
  return (
    <Link href={href} className={styles['navigation-solution-card']}>
      <Space direction="vertical" className={styles['navigation-solution-card_content']}>
        <Text strong>{title && t(title)}</Text>
        <Text type="secondary">{description && t(description)}</Text>
      </Space>

      <Image
        alt=""
        quality={100}
        width={150}
        height={160}
        src={src}
        className={styles['navigation-solution-card_img']}
      />
    </Link>
  );
};

const POSCard = ({ title, href }: CardProp) => {
  return (
    <Link href={href} className={styles['navigation-pos-card']}>
      <Text strong>{title}</Text>
      <Icon size={20} className={styles['navigation-pos-card_arrow']} name="right" />
    </Link>
  );
};

const BusinessCard = ({ title, src, href }: CardProp) => {
  const { t } = useTranslation();

  return (
    <Link href={href} className={styles['navigation-business-card']}>
      <div className={styles['navigation-business-card_backdrop']} />
      <Image
        alt=""
        quality={100}
        width={386}
        height={200}
        src={src}
        className={styles['navigation-business-card_img']}
      />
      <Text className={styles['navigation-business-card_title']}>{title && t(title)}</Text>
    </Link>
  );
};

const ProductCard = ({ title, src, href }: CardProp) => {
  const { t } = useTranslation();

  return (
    <Link href={href} className={styles['navigation-product-card']}>
      <Image
        alt=""
        quality={100}
        width={80}
        height={80}
        src={src}
        className={styles['navigation-product-card_img']}
      />
      <div className={styles['navigation-product-card_content']}>
        <Text strong>{title && t(title)}</Text>
      </div>
    </Link>
  );
};

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['navigation_pos-menus-footer']}>
      <Text type="secondary" className="font-14">
        Request your POS brand
      </Text>
      <Space size={4} className="cursor">
        <Link href={RouteConfig.Contacts}>
          <Text strong>{t('contact_us')}</Text>
        </Link>
        <Icon name="chevron-right" />
      </Space>
    </div>
  );
};
export const MENU_ITEMS = [
  {
    key: RouteConfig.Solution,
    label: NavigationLabel.Solutions,
    children: [
      {
        type: 'group',
        label: (
          <div className={styles['navigation_solution-menus']}>
            {SOLUTIONS_MENU.map((item, idx) => (
              <SolutionCard key={`${idx}`} {...item} />
            ))}
          </div>
        ),
      },
    ],
  },
  {
    key: RouteConfig.Equipment,
    label: NavigationLabel.Equipments,
    children: [
      {
        type: 'group',
        label: (
          <div className={styles['navigation_pos-menus']}>
            <Container className={styles['navigation_pos-menus-container']}>
              {EQUIPMENTS_MENU.map((item, idx) => (
                <POSCard key={`${idx}`} {...item} />
              ))}
            </Container>
            <ContactUs />
          </div>
        ),
      },
    ],
  },
  {
    key: RouteConfig.BusinessTypes,
    label: NavigationLabel.BusinessTypes,
    children: [
      {
        type: 'group',
        label: (
          <div className={styles['navigation_business-menus']}>
            <Container className={styles['navigation_business-menus_container']}>
              {BUSINESS_MENU.map((item, idx) => (
                <BusinessCard key={`${idx}`} {...item} />
              ))}
            </Container>
          </div>
        ),
      },
    ],
  },
  {
    key: RouteConfig.Products,
    label: NavigationLabel.Products,
    children: [
      {
        type: 'group',
        label: (
          <div className={styles['navigation_products-menus']}>
            <Container className={styles['navigation_products-menus_container']}>
              {PRODUCTS_MENU.map((item, idx) => (
                <ProductCard key={`${idx}`} {...item} />
              ))}
            </Container>
          </div>
        ),
      },
    ],
  },
];

export const Navigation: FC = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation();

  const activeKey = useMemo(() => {
    if (
      [
        RouteConfig.Revel,
        RouteConfig.CloverFlex,
        RouteConfig.CloverDuo,
        RouteConfig.Exatouch,
        RouteConfig.Simphony,
        RouteConfig.Brink,
        RouteConfig.Ovvi,
        RouteConfig.Aldelo,
        RouteConfig.Lightspeed,
        RouteConfig.Aloha,
        RouteConfig.Upserve,
        RouteConfig.Toast,
        RouteConfig.Rpower,
        RouteConfig.Union,
        RouteConfig.Touchbistro,
      ].includes(pathname as any)
    ) {
      return RouteConfig.Equipment;
    }

    if (
      [
        RouteConfig.FullServiceRestaurants,
        RouteConfig.Retail,
        RouteConfig.QuickServiceRestaurants,
        RouteConfig.SmallBusiness,
        RouteConfig.BarsAndNightClubs,
        RouteConfig.Pizzerias,
      ].includes(pathname as any)
    ) {
      return RouteConfig.BusinessTypes;
    }

    if (
      [
        RouteConfig.CloverAppMarket,
        RouteConfig.CashDiscountProgram,
        RouteConfig.GiftCardProgram,
        RouteConfig.CustomerLoyaltyProgramsAndRewards,
        RouteConfig.OnlineAnalytics,
        RouteConfig.CheckServices,
        RouteConfig.CashAdvance,
        RouteConfig.QuickbooksPlugin,
        RouteConfig.Invoicing,
      ].includes(pathname as any)
    ) {
      return RouteConfig.Products;
    }
  }, [pathname]);

  return (
    <nav className={styles.navigation}>
      <Menu
        activeKey={activeKey}
        mode="horizontal"
        // openKeys={[RouteConfig.Products]}
        items={MENU_ITEMS.map(item => ({
          ...item,
          label: (
            <Space size={0}>
              {t(item.label)}
              <Icon name="chevron-down" color="grey" />
            </Space>
          ),
          popupClassName: styles['navigation_mega-menu'],
          popupOffset: [0, 0],
        }))}
      />
    </nav>
  );
};
