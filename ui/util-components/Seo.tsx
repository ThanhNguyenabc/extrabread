import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { DOMAIN } from '~/constants/index';
import { useDevice } from '~/hooks/useDetectMobile';

interface Props {
  title: string;
  description?: string;
  keywords?: string;
  imageFeature?: string;
  children?: React.ReactNode;
}

export const Seo: React.FC<Props> = ({
  children,
  title: initTitle,
  description: initDesc,
  keywords: initKeywords,
  imageFeature: initImage,
}) => {
  const { asPath } = useRouter();
  const url = asPath ? `${DOMAIN}${asPath}` : DOMAIN;
  const title = `${initTitle !== 'title' ? initTitle : 'Loading... | '}`;
  const isHome = asPath === '/';

  return (
    <Head>
      {/*HTML Meta Tags*/}
      <title>{title}</title>
      <meta name="description" content={initDesc} />
      <meta name="keywords" content={initKeywords} />

      {/*Facebook Meta Tags*/}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={isHome ? 'website' : 'article'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={initDesc} />
      <meta property="og:image" content={initImage ?? '/images/seo/seo-img-5.png'} />
      <meta name="robots" content="index" />
      {children}

      <link rel="canonical" href={url} />

      {/* {isMobile && (
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
      )}
      {!isMobile && <meta name="viewport" content="width=1440" />} */}
    </Head>
  );
};
