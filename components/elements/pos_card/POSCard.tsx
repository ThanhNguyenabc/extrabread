import { LG_SCREEN } from '@/constants';
import { useDevice } from '@/hooks/useDetectMobile';
import dynamic from 'next/dynamic';
import React from 'react';
import { POSCardProps, RecommendColorConfig } from './POSCardTypes';

const POSCardDesktop = dynamic(() => import('./POSCard.desktop'), {
  ssr: false,
});
const POSCardMobile = dynamic(() => import('./POSCard.mobile'), {
  ssr: false,
});

const POSCard = (props: POSCardProps) => {
  const { screenSize } = useDevice();

  let CardCmp = POSCardMobile;

  if (screenSize >= LG_SCREEN) CardCmp = POSCardDesktop;

  const detailURL = props.navigateTo || `/product/${props.data.slug}`;

  return (
    <CardCmp
      {...props}
      recommendTagProps={props.priority && RecommendColorConfig[props.priority]}
      navigateTo={detailURL}
    />
  );
};

export default POSCard;
