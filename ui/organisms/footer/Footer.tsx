/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Collapse, Layout, Space, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
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
    title: 'Payment Processing',
    replaceTitle: 'Payment Processing',
    description: 'In-person payments have never been easier.',
  },
];
const MenuCategory = ({
  title,
  menus,
}: {
  title: string;
  menus: {
    text: string;
    href: string;
    replaceTitle?: string;
  }[];
}) => (
  <div className={styles['footer_menu-category']}>
    <Text strong>{title}</Text>
    {menus.map((item, idx) => (
      <Link key={`${idx}`} href={item.href}>
        <Text className={styles['text-400']}>{item.replaceTitle ?? item.text}</Text>
      </Link>
    ))}
  </div>
);

export const BreadFooter = () => {
  const { isMobile } = useDevice();
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
              Email
            </Text>
            <a className={styles['footer-link']} href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </Space>
          <div className={styles['footer_contact']}>
            <Text type="success" strong>
              or Call us
            </Text>
            <a className={styles['footer-link']} href={`tel:${PHONE}`}>
              {PHONE}
            </a>
            <Text className={styles['footer_time']}>Monday - Friday, 5am - 7pm PT</Text>
            <Text className={styles['footer_time']}>Saturday - Sunday, 6am - 5pm PT</Text>
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
              <Panel header={NavigationLabel.Solutions} key={NavigationLabel.Solutions}>
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
              <Panel header={NavigationLabel.Equipments} key={NavigationLabel.Equipments}>
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
              <Panel header={NavigationLabel.BusinessTypes} key={NavigationLabel.BusinessTypes}>
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
              <Panel header={NavigationLabel.Products} key={NavigationLabel.Products}>
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
              <Panel header={NavigationLabel.Company} key={NavigationLabel.Company}>
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
            <MenuCategory
              title={NavigationLabel.Solutions}
              menus={FOOTER_SOLUTION_MENU.map(item => ({
                text: item.title,
                href: item.href,
                // @ts-ignore
                replaceTitle: item.replaceTitle,
              }))}
            />
            <MenuCategory
              title={NavigationLabel.Equipments}
              menus={EQUIPMENTS_MENU.map(item => ({
                text: item.title,
                href: item.href,
              }))}
            />
            <MenuCategory
              title={NavigationLabel.BusinessTypes}
              menus={BUSINESS_MENU.map(item => ({
                text: item.title,
                href: item.href,
              }))}
            />
            <MenuCategory
              title={NavigationLabel.Products}
              menus={PRODUCTS_MENU.map(item => ({
                text: item.title,
                href: item.href,
              }))}
            />
            <MenuCategory
              title={NavigationLabel.Company}
              menus={COMPANY_MENU.map(item => ({
                text: item.title,
                href: item.href,
              }))}
            />
          </div>
        )}

        <Space direction="vertical" size={16}>
          <Text className={styles['text-400']}>
            ExtraBread is a POS consultant service that provides financial assistance and advice to
            businesses. We strive to provide accurate and up-to-date information to our clients, but
            we do not guarantee the accuracy, completeness, or timeliness of the information
            provided. This website is owned and operated by ELECPAYMENTS INC. Reproduction of this
            website, in whole or in part, is strictly prohibited. 
          </Text>

          <Text className={styles['text-400']}>
            By using our service, you agree to be bound by these{' '}
            <Link href={RouteConfig.PrivacyPolicy} passHref>
              <Text className={styles['text-400']} underline>
                Privacy Policy
              </Text>
            </Link>{' '}
            and{' '}
            <Link href={RouteConfig.TermsOfService} passHref>
              <Text className={styles['text-400']} underline>
                Terms of Service
              </Text>
            </Link>
            . If you have any questions or concerns, please contact us at info@extrabread.com.
          </Text>
        </Space>

        <div className={styles['footer-copyright']}>
          <span>&#169; Copyright 2023 ExtraBread. All Rights Reserved.</span>
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
