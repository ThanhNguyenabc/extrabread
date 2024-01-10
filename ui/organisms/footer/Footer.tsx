/* eslint-disable @typescript-eslint/ban-ts-comment */
import { cn } from '@/lib/utils';
import { Collapse, Layout, Space, Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import {
  BUSINESS_MENU,
  COMPANY_MENU,
  EMAIL,
  EQUIPMENTS_MENU,
  NavigationLabel,
  PHONE,
  PRODUCTS_MENU,
  RouteConfig,
  SOLUTIONS_MENU,
} from '~/constants/index';
import { useDevice } from '~/hooks/useDetectMobile';
import { Icon } from '~/ui/atoms/icon/Icon';
import { LogoFooter } from '~/ui/img-resource/ImageResources';
import styles from './Footer.module.scss';
const { Text } = Typography;
const { Footer } = Layout;
const { Panel } = Collapse;

const FOOTER_SOLUTION_MENU = [
  ...SOLUTIONS_MENU,
  {
    href: RouteConfig.PaymentProcessing,
    title: 'payment_processing',
  },
];

const MenuCategory = ({
  title,
  menus,
}: {
  title: string;
  menus: {
    title: string;
    href: string;
    replaceTitle?: string | undefined;
  }[];
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles['footer_menu-category']}>
      <Text strong>{t(title)}</Text>
      {menus.map((item, idx) => (
        <Link key={`${idx}`} href={item.href}>
          <Text className={styles['text-400']}>{t(item.title)}</Text>
        </Link>
      ))}
    </div>
  );
};

export const BreadFooter = () => {
  const { isMobile } = useDevice();
  const { t } = useTranslation();
  const WorkingDays = useMemo(() => {
    return (t('footer.working_day', { returnObjects: true }) as Array<string>) || [];
  }, [t]);

  return (
    <Footer className={styles['footer']}>
      <div className={styles['footer-inner']}>
        <div className={styles['footer-heading']}>
          <Image
            alt=""
            quality={100}
            width={192}
            height={32}
            src={LogoFooter}
            className={styles['footer-logo']}
          />

          <Space direction="vertical" size={0} style={{ marginRight: 24 }}>
            <Text type="success" strong>
              {t('email')}
            </Text>
            <a className={styles['footer-link']} href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </Space>
          <div className={styles['footer_contact']}>
            <Text type="success" strong>
              {t('call_us')}
            </Text>
            <a className={styles['footer-link']} href={`tel:${PHONE}`}>
              {PHONE}
            </a>
            {WorkingDays?.map(item => (
              <Text key={item} className={styles['footer_time']}>
                {item}
              </Text>
            ))}
          </div>
        </div>

        {isMobile ? (
          <div className={styles['footer-menus-collapsed']}>
            <Collapse
              ghost
              expandIconPosition="end"
              className={styles['faqs_collapse']}
              expandIcon={props => {
                return <Icon name={props.isActive ? 'chevron-up' : 'chevron-down'} color="white" />;
              }}
            >
              <Panel header={t(NavigationLabel.Solutions)} key={NavigationLabel.Solutions}>
                {FOOTER_SOLUTION_MENU.map((item, idx) => (
                  <Link key={`${idx}`} href={item.href}>
                    <Text className={styles['text-400']}>{item.title}</Text>
                  </Link>
                ))}
              </Panel>
            </Collapse>

            <Collapse
              ghost
              expandIconPosition="end"
              className={styles['faqs_collapse']}
              expandIcon={props => {
                return <Icon name={props.isActive ? 'chevron-up' : 'chevron-down'} color="white" />;
              }}
            >
              <Panel header={t(NavigationLabel.Equipments)} key={NavigationLabel.Equipments}>
                {EQUIPMENTS_MENU.map((item, idx) => (
                  <Link key={`${idx}`} href={item.href}>
                    <Text className={styles['text-400']}>{item.title}</Text>
                  </Link>
                ))}
              </Panel>
            </Collapse>

            <Collapse
              ghost
              expandIconPosition="end"
              className={styles['faqs_collapse']}
              expandIcon={props => {
                return <Icon name={props.isActive ? 'chevron-up' : 'chevron-down'} color="white" />;
              }}
            >
              <Panel header={t(NavigationLabel.BusinessTypes)} key={NavigationLabel.BusinessTypes}>
                {BUSINESS_MENU.map((item, idx) => (
                  <Link key={`${idx}`} href={item.href}>
                    <Text className={styles['text-400']}>{item.title}</Text>
                  </Link>
                ))}
              </Panel>
            </Collapse>

            <Collapse
              ghost
              expandIconPosition="end"
              className={styles['faqs_collapse']}
              expandIcon={props => {
                return <Icon name={props.isActive ? 'chevron-up' : 'chevron-down'} color="white" />;
              }}
            >
              <Panel header={t(NavigationLabel.Products)} key={NavigationLabel.Products}>
                {PRODUCTS_MENU.map((item, idx) => (
                  <Link key={`${idx}`} href={item.href}>
                    <Text className={styles['text-400']}>{item.title}</Text>
                  </Link>
                ))}
              </Panel>
            </Collapse>

            <Collapse
              ghost
              expandIconPosition="end"
              className={styles['faqs_collapse']}
              expandIcon={props => {
                return <Icon name={props.isActive ? 'chevron-up' : 'chevron-down'} color="white" />;
              }}
            >
              <Panel header={t(NavigationLabel.Company)} key={NavigationLabel.Company}>
                {COMPANY_MENU.map((item, idx) => (
                  <Link key={`${idx}`} href={item.href}>
                    <Text className={styles['text-400']}>{item.title}</Text>
                  </Link>
                ))}
              </Panel>
            </Collapse>
          </div>
        ) : (
          <div className={styles['footer-menus']}>
            <MenuCategory title={t(NavigationLabel.Solutions)} menus={FOOTER_SOLUTION_MENU} />
            <MenuCategory title={t(NavigationLabel.Equipments)} menus={EQUIPMENTS_MENU} />
            <MenuCategory title={t(NavigationLabel.BusinessTypes)} menus={BUSINESS_MENU} />
            <MenuCategory title={t(NavigationLabel.Products)} menus={PRODUCTS_MENU} />
            <MenuCategory title={t(NavigationLabel.Company)} menus={COMPANY_MENU} />
          </div>
        )}

        <Space direction="vertical" size={16}>
          <Text className={cn(styles['text-400'], 'whitespace-pre-line')}>
            {t('footer.policy')}{' '}
            <Link href={RouteConfig.PrivacyPolicy} passHref>
              <Text className={styles['text-400']} underline>
                {t('privacy_policy')}
              </Text>
            </Link>
            {` ${t('and')} `}
            <Link href={RouteConfig.TermsOfService} passHref>
              <Text className={styles['text-400']} underline>
                {t('term_of_service')}
              </Text>
            </Link>
            . {t('footer.any_question')}
          </Text>
        </Space>

        <div className={styles['footer-copyright']}>
          <span>{t('footer.copy_right')}</span>
          <Space size={24}>
            <Text>
              <Icon name="facebook" color="light" />
            </Text>
            <Text>
              <Icon name="instagram" color="light" />
            </Text>
            <Text>
              <Icon name="linkedin" color="light" />
            </Text>
          </Space>
        </div>
      </div>
    </Footer>
  );
};
