import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { BUSINESS_MENU, RouteConfig, RouteConfigType } from '~/constants/index';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Segmented } from '~/ui/atoms/segment/Segment';
import { BusinessExplore } from '~/ui/organisms/business-explore/BusinessExplore';
import { CTAInnerFooter } from '~/ui/organisms/cta-inner-footer/CTAInnerFooter';
import { BreadFooter } from '~/ui/organisms/footer/Footer';

import { useHookstate } from '@hookstate/core';
import { commonState } from '~/hooks/useCtaFooterState';
import { useDevice } from '~/hooks/useDetectMobile';
import {
  CashDiscountProgramImg,
  CheckServicesImg,
  CloverAppMarketImg,
  GiftCardProgramImg,
  LoyaltyRewardsImg,
} from '~/ui/img-resource/ImageResources';
import { SolutionPackages } from '~/ui/organisms/solution-packages/SolutionPackages';
import { UniqueValue } from '~/ui/organisms/unique-value/UniqueValue';
import styles from './BusinessTypesTemplate.module.scss';

const SOLUTION_PACKAGES = [
  {
    title: 'Clover App Market',
    description: 'Choose from over 200 powerful apps designed to help you run your business.',
    href: RouteConfig.CloverAppMarket,
    src: CloverAppMarketImg.src,
  },
  {
    title: 'Gift Card Program',
    description: 'Encourage brand loyalty with upfront payments for future purchases.',
    href: RouteConfig.GiftCardProgram,
    src: GiftCardProgramImg.src,
  },
  {
    title: 'Loyalty & Rewards',
    description: 'Choose from over 200 powerful apps designed to help you run your business.',
    href: RouteConfig.CustomerLoyaltyProgramsAndRewards,
    src: LoyaltyRewardsImg.src,
  },
  {
    title: 'Cash Discount Program',
    description: 'Encourage brand loyalty with upfront payments for future purchases.',
    href: RouteConfig.CashDiscountProgram,
    src: CashDiscountProgramImg.src,
  },
  {
    title: 'Check Services',
    description: 'Convert checks into electronic payments and speed up your cash flow.',
    href: RouteConfig.CheckServices,
    src: CheckServicesImg.src,
  },
];

export const BusinessTypesTemplate = ({ children }: PropsWithChildren) => {
  const state = useHookstate(commonState);
  const { push, asPath } = useRouter();
  const path = asPath as RouteConfigType;
  const { isMobile } = useDevice();
  const [activeTab, setActiveTab] = useState<RouteConfigType>('/full-service-restaurants');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab(path);
    state.set({
      footerText: 'Discover the perfect point of sale system for your business today!',
    });
  }, [path]);

  const menus = useMemo(() => {
    return !path
      ? BUSINESS_MENU.slice(0, 5)
      : BUSINESS_MENU.filter(item => !item.href.startsWith(path));
  }, [asPath, isMobile]);

  return (
    <main className={styles['business-types']}>
      <div className={styles['solutions_segment']}>
        <Segmented
          activeKey={activeTab}
          onChange={value => push(value)}
          items={BUSINESS_MENU.map(item => ({
            title: item.title,
            value: item.href,
          }))}
        />
      </div>

      {children}

      <BreadCard isGrey>
        <SolutionPackages
          heading="POS Features favored by businesses like yours"
          items={SOLUTION_PACKAGES}
        />
      </BreadCard>

      <UniqueValue />

      <BreadCard>
        <BusinessExplore heading="Explore other business types" items={menus as any} />
      </BreadCard>

      <CTAInnerFooter
        htmlText="Discover the perfect point of sale system for your business today!"
        bonus={240}
        sale={7500}
      />
    </main>
  );
};
