import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { DOMAIN } from '~/constants/index';

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  imageFeature?: string;
  children?: React.ReactNode;
}

export const Seo: React.FC<Props> = ({
  title: initTitle,
  description: initDesc,
  keywords: initKeywords,
  imageFeature: initImage,
}) => {
  const { asPath } = useRouter();
  const url = asPath ? `${DOMAIN}${asPath}` : DOMAIN;
  const title = initTitle || 'ExtraBread: Save and Earn more Bread$ for your business';
  const isHome = asPath === '/';
  let image = 'https://res.cloudinary.com/dgrym3yz3/image/upload/v1702024071/extrabread/ebrz7dhu2jh8zvaaw2fd.png';
  if (initImage && initImage.length > 0) image = initImage;

  return (
    <Head>
      {/*HTML Meta Tags*/}
      <title>{title}</title>
      <meta
        name="description"
        content={
          initDesc ||
          'Let ExtraBread help you save money with a free POS system, receive a cash signing bonus, and reduce your payment processing fees.'
        }
      />
      <meta
        name="keywords"
        content={
          initKeywords ||
          'extra bread, capital, processing fees, cash signing bonus, cash bonus, no processing, cash discount, zero processing, POS system, point of sale, Revel, Clover, Clover Flex, Clover Duo, Ovvi, Micros, Exatouch, Simphony, Aldelo, Toast, Union, Rpower, Aloha, TouchBistro, best pos, pos, small business, retail, pizzeria, bar and night club, quick service, restaurant, point of sale system, revel pos, clover pos, ovvi pos, micros pos, exatouch pos, simphony pos, aldelo pos, toast pos, square, top pos providers, smart pos system'
        }
      />

      {/*Facebook Meta Tags*/}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={isHome ? 'website' : 'article'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={initDesc} />
      <meta property="og:image" content={image} />
      <meta name="robots" content="index" />
      <meta name="msvalidate.01" content="3C6845B8D23659F8E98DDA4C3166E803" />
      <link rel="canonical" href={url} />
    </Head>
  );
};
