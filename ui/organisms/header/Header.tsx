import { RouteConfig } from '@/constants/routes';
import { ESIcon, USIcon } from '@/ui/img-resource/ExIcon';
import { useHookstate } from '@hookstate/core';
import { Drawer, DrawerProps, Dropdown, Layout, Space, Typography } from 'antd';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { COMPANY_MENU, Languages, NavigationLabel, PHONE } from '~/constants/index';
import { useDevice } from '~/hooks/useDetectMobile';
import { globalState } from '~/hooks/useLanguage';
import { Button } from '~/ui/atoms/button/Button';
import { Container } from '~/ui/atoms/container/Container';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Heading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import SafeHydrate from '~/ui/atoms/safe-hydrate';
import { LogoFullIcon, LogoSmallIcon } from '~/ui/img-resource/ImageResources';
import { MENU_ITEMS, Navigation } from '~/ui/organisms/navigation/Navigation';
import styles from './Header.module.scss';

const { Link: AntLink, Text } = Typography;
const { Header: AntHeader } = Layout;

const items = [
  {
    key: Languages.US,
    label: <USIcon />,
    title: 'English',
  },
  {
    key: Languages.ES,
    label: <ESIcon />,
    title: 'Español',
  },
];

const MenuDrawer = ({
  margin,
  lang,
  ...props
}: DrawerProps & {
  lang?: string;
  margin?: number;
}) => {
  const { t } = useTranslation('common');
  const [currentMenu, setCurrentMenu] = useState('');
  const [selectedLang, setSelectedLang] = useState(lang);
  const { isMobile, isLessTablet } = useDevice();
  const { pathname, asPath, query, push } = useRouter();

  const handleChangeLang = (nextLocale: string) => {
    // change just the locale and maintain all other route information including href's query
    push({ pathname, query }, asPath, { locale: nextLocale });
    setSelectedLang(nextLocale);
  };

  return (
    <Drawer
      width="100vw"
      placement="right"
      maskClosable
      closable={false}
      mask={false}
      style={
        !isMobile
          ? { height: `calc(100vh - ${margin}px)`, marginTop: margin }
          : {
              height: '100vh',
            }
      }
      {...props}
    >
      <div>
        <div className={styles['header-nav_logo']}>
          <Image alt="logo" width={34} height={30} quality={100} src={LogoSmallIcon} />
          <Icon name="close" animation onClick={props.onClose as any} />
        </div>
        <CSSTransition
          unmountOnExit
          in={!currentMenu}
          timeout={250}
          classNames={{
            enter: styles['header-mainMenu--enter'],
            enterActive: styles['header-mainMenu--enter-active'],
            exit: styles['header-mainMenu--exit'],
            exitActive: styles['header-mainMenu--exit-active'],
          }}
        >
          <nav className={styles['header-nav']}>
            {isLessTablet && !currentMenu && (
              <div className={styles['header_flags-mb']}>
                {items.map(item => (
                  <Button
                    block
                    size="small"
                    className={classNames(
                      selectedLang === item.key && styles['header_flags-mb--active'],
                    )}
                    key={item.key}
                    onClick={() => handleChangeLang(item.key)}
                  >
                    {item.label}
                    {item.title}
                  </Button>
                ))}
              </div>
            )}
            <Button
              type="link"
              className={styles['header-nav-item']}
              onClick={() => props.onClose?.({} as any)}
            >
              <Text strong>{t('home')}</Text>
            </Button>
            {MENU_ITEMS.map(item => (
              <Button
                type="link"
                key={item.key}
                className={styles['header-nav-item']}
                onClick={() => setCurrentMenu(item.label)}
              >
                <Text strong>{t(item.label)}</Text>
                <Icon name="chevron-right" />
              </Button>
            ))}
            <Button
              type="link"
              className={styles['header-nav-item']}
              onClick={() => setCurrentMenu(NavigationLabel.Company)}
            >
              <Text strong>{t(NavigationLabel.Company)}</Text>
              <Icon name="chevron-right" />
            </Button>
            <footer>
              <div className="mb-16">{t('footer.copy_right')}</div>
              <Space size={24}>
                <AntLink>
                  <Icon name="facebook" color="light" />
                </AntLink>
                <AntLink>
                  <Icon name="instagram" color="light" />
                </AntLink>
                <AntLink>
                  <Icon name="linkedin" color="light" />
                </AntLink>
              </Space>
            </footer>
          </nav>
        </CSSTransition>

        {[
          ...MENU_ITEMS,
          {
            key: NavigationLabel.Company,
            label: NavigationLabel.Company,
            children: [
              {
                label: (
                  <Space direction="vertical" size={24} style={{ marginTop: 16 }}>
                    {COMPANY_MENU.map((item, idx) => (
                      <Link key={idx} href={item.href}>
                        <Text strong>{t(item.title)}</Text>
                      </Link>
                    ))}
                  </Space>
                ),
              },
            ],
          },
        ].map(item => (
          <CSSTransition
            key={item.key}
            unmountOnExit
            in={currentMenu === item.label}
            timeout={250}
            classNames={{
              enter: styles['header-subMenu--enter'],
              enterActive: styles['header-subMenu--enter-active'],
              exit: styles['header-subMenu--exit'],
              exitActive: styles['header-subMenu--exit-active'],
            }}
          >
            <div className={styles['header-subMenu']}>
              <div>
                <AntLink onClick={() => setCurrentMenu('')}>
                  <Icon name="left" />
                </AntLink>
                <Heading size="sm">{t(currentMenu)}</Heading>
              </div>

              {item.children[0].label}
            </div>
          </CSSTransition>
        ))}
      </div>
    </Drawer>
  );
};

export const Header = () => {
  const { t } = useTranslation('common');
  const { isLaptop } = useDevice();
  const state = useHookstate(globalState);
  const { asPath, push, pathname, query } = useRouter();
  const { lang, openMenu } = state.get();

  useEffect(() => {
    state.set({ lang, openMenu: false });
  }, [asPath]);

  const handleMenuClick = ({ key }) => {
    state.set({ lang: key, openMenu });
    push({ pathname, query }, asPath, { locale: key });
  };

  const menuRef = useRef<HTMLDivElement>(null);
  const activeIndex = items.findIndex(item => item.key === lang);
  const menuX = menuRef.current?.getBoundingClientRect().bottom;

  const handleToggleMenu = () => {
    state.set({ openMenu: !openMenu, lang });
  };

  return (
    <>
      <Container>
        <AntHeader className={styles['header-inner']}>
          {!isLaptop && (
            <Button
              className={styles['header-inner_menu-icon']}
              type="link"
              size="small"
              icon={<Icon name="menu" color={openMenu ? 'green' : 'grey'} />}
              onClick={handleToggleMenu}
            />
          )}
          <Link href={RouteConfig.Home} className={styles['header-logo']}>
            <Image quality={90} alt="logo" width={192} height={32} src={LogoFullIcon} />
          </Link>
          {isLaptop && <Navigation />}
          <div className={styles['header-right-content']}>
            <div className={styles['header-phone']}>
              <Space size={4}>
                <Icon name="phone" color="green" />
                <AntLink strong href={`tel:${PHONE}`} className="font-14-12">
                  {t('support')} 24/7
                </AntLink>
              </Space>
              <Text strong>{PHONE}</Text>
            </div>

            <div className="hide-sp">
              <GetPricingButton />
            </div>

            <div className={classNames(styles['header-flag'], 'hide-sp')}>
              <Dropdown
                menu={{ items, onClick: handleMenuClick }}
                placement="bottom"
                trigger={['click']}
              >
                {items[activeIndex]?.label}
              </Dropdown>
            </div>
          </div>
        </AntHeader>
      </Container>
      <SafeHydrate>
        <MenuDrawer
          lang={lang}
          open={!isLaptop && openMenu}
          onClose={handleToggleMenu}
          margin={menuX}
          className={styles['header-drawer']}
        />
      </SafeHydrate>
    </>
  );
};
