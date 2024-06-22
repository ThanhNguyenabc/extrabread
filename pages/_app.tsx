import 'antd/dist/reset.css';
import 'assets/styles/index.scss';
import 'assets/styles/tailwind.scss';
import variables from 'assets/styles/variables.module.scss';

import { RouteConfig } from '@/constants/routes';
import { Loading } from '@/ui/atoms/loading/Loading';
import { StyleProvider } from '@ant-design/cssinjs';
import { useHookstate } from '@hookstate/core';
import { ConfigProvider } from 'antd';
import { AliasToken } from 'antd/es/theme/internal';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { useDevice } from '~/hooks/useDetectMobile';
import { globalState } from '~/hooks/useLanguage';
import nextI18NextConfig from '../next-i18next.config.js';
const Alert = dynamic(() => import('@/ui/organisms/alert/Alert').then(res => res.Alert), {
  ssr: false,
});
const Toaster = dynamic(() => import('@/components/ui/toaster').then(res => res.Toaster), {
  ssr: false,
});
const Header = dynamic(() => import('@/ui/organisms/header/Header').then(res => res.Header), {
  ssr: false,
});
const BreadFooter = dynamic(
  () => import('@/ui/organisms/footer/Footer').then(res => res.BreadFooter),
  { ssr: false },
);
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '800'], display: 'swap' });

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
        <div
          className={inter.className}
          style={{ ...(state.get().openMenu && { overflow: 'hidden', height: '100vh' }) }}
        >
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
