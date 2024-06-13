import 'antd/dist/reset.css';
import 'assets/styles/index.scss';
import 'assets/styles/tailwind.scss';

import { Loading } from '@/ui/atoms/loading/Loading';
import { StyleProvider } from '@ant-design/cssinjs';
import { useHookstate } from '@hookstate/core';
import { ConfigProvider } from 'antd';
import { AliasToken } from 'antd/es/theme/internal';
import variables from 'assets/styles/variables.module.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { useDevice } from '~/hooks/useDetectMobile';
import { globalState } from '~/hooks/useLanguage';

import { RouteConfig } from '@/constants';
import { Alert } from '@/ui/organisms/alert/Alert';
import { appWithTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import nextI18NextConfig from '../next-i18next.config.js';
const Toaster = dynamic(() => import('@/components/ui/toaster').then(res => res.Toaster));
const Header = dynamic(() => import('@/ui/organisms/header/Header').then(res => res.Header));
const BreadFooter = dynamic(() =>
  import('@/ui/organisms/footer/Footer').then(res => res.BreadFooter),
);
const {
  errorColor,
  errorHoverColor,
  primaryColor,
  whiteColor,
  infoColor,
  textColor,
  warningColor,
  primaryHoverColor,
  neutral300,
  neutral400,
  neutral600,
} = variables;

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  const { isLessTablet, isMobile } = useDevice();
  const [showBanner, setShowBanner] = useState(false);

  const state = useHookstate(globalState);
  const router = useRouter();
  const font = useMemo(() => {
    let size: Partial<AliasToken> = {
      fontSize: 16,
    };

    if (isMobile) {
      size = {
        ...size,
        fontSize: 14,
        fontSizeHeading1: 40,
        fontSizeHeading2: 36,
        fontSizeHeading3: 24,
        fontSizeHeading4: 22,
        fontSizeHeading5: 20,
        lineHeightHeading3: 1.333,
      };
    } else if (isLessTablet) {
      size = {
        ...size,
        fontSizeHeading1: 62,
        fontSizeHeading2: 60,
        fontSizeHeading3: 36,
        fontSizeHeading4: 30,
        fontSizeHeading5: 24,
        lineHeightHeading3: 1.1,
        lineHeightHeading4: 1.1,
      };
    } else {
      size = {
        ...size,
        fontSizeHeading1: 72,
        fontSizeHeading2: 60,
        fontSizeHeading3: 48,
        fontSizeHeading4: 36,
        fontSizeHeading5: 30,
      };
    }
    return size;
  }, [isLessTablet]);

  const [routeState, setRouteState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  });

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setRouteState(prevState => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      setRouteState(prevState => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);
    router.events.on('routeChangeError', handleRouteChangeEnd);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
      router.events.off('routeChangeError', handleRouteChangeEnd);
    };
  }, [router.events]);

  useEffect(() => {
    state.set({ lang: (router.locale ?? 'en') as any });
  }, [router.locale]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (router.asPath === RouteConfig.Home || router.asPath == '/hp2') {
      setShowBanner(true);
    } else if (showBanner) {
      setShowBanner(false);
    }
  }, [router.asPath]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConfigProvider
        theme={{
          hashed: true,
          token: {
            ...font,
            fontFamily: 'Inter, sans-serif',
            colorPrimary: primaryColor,
            lineWidth: 2,
            lineWidthFocus: 2,
            colorBorder: neutral300,
            colorPrimaryBgHover: primaryHoverColor,
            colorPrimaryHover: primaryHoverColor,
            colorError: errorColor,
            colorErrorHover: errorHoverColor,
            colorErrorBorderHover: errorHoverColor,
            colorInfo: infoColor,
            colorWarning: warningColor,
            colorTextBase: textColor,
            colorTextSecondary: neutral600,
            colorTextDescription: neutral600,
            colorBgSpotlight: textColor,
            colorText: textColor,
            colorBgLayout: whiteColor,
            colorLink: primaryColor,
            colorLinkActive: primaryColor,
            colorSuccess: primaryColor,
            colorLinkHover: primaryColor,
            colorTextPlaceholder: neutral400,
            zIndexBase: 1000,
          },
        }}
      >
        <div style={{ ...(state.get().openMenu && { overflow: 'hidden', height: '100vh' }) }}>
          <Loading isRouteChanging={routeState.isRouteChanging} key={routeState.loadingKey} />
          <StyleProvider ssrInline>
            {showBanner && <Alert />}
            <Header />
            <Component {...pageProps} />
            <BreadFooter />
          </StyleProvider>
        </div>
      </ConfigProvider>
      <Toaster />
    </>
  );
};

export default appWithTranslation(App, {
  i18n: {
    defaultLocale: nextI18NextConfig.i18n.defaultLocale,
    locales: nextI18NextConfig.i18n.locales,
  },
});
