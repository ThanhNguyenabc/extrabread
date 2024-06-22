import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { BUSINESS_MENU } from '~/constants/index';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Segmented } from '~/ui/atoms/segment/Segment';
import { BusinessExplore } from '~/ui/organisms/business-explore/BusinessExplore';
import { CTAInnerFooter } from '~/ui/organisms/cta-inner-footer/CTAInnerFooter';

import { RouteConfig, RouteConfigType } from '@/constants/routes';
import { useTranslation } from 'next-i18next';
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

const SOLUTION_CONFIGS = [
  {
    title: 'product_types.market.title',
    description: 'product_types.market.description',
    href: RouteConfig.CloverAppMarket,
    src: CloverAppMarketImg,
  },
  {
    title: 'product_types.gift.title',
    description: 'product_types.gift.description',
    href: RouteConfig.GiftCardProgram,
    src: GiftCardProgramImg,
  },
  {
    title: 'product_types.loyalty.title',
    description: 'product_types.loyalty.description',
    href: RouteConfig.CustomerLoyaltyProgramsAndRewards,
    src: LoyaltyRewardsImg,
  },
  {
    title: 'product_types.cash_discount.title',
    description: 'product_types.cash_discount.description',
    href: RouteConfig.CashDiscountProgram,
    src: CashDiscountProgramImg,
  },
  {
    title: 'product_types.check_service.title',
    description: 'product_types.check_service.description',
    href: RouteConfig.CheckServices,
    src: CheckServicesImg,
  },
];

export const BusinessTypesTemplate = ({ children }: PropsWithChildren) => {
  const { t: common } = useTranslation();
  const { push, asPath } = useRouter();
  const path = asPath as RouteConfigType;
  const { isMobile } = useDevice();
  const [activeTab, setActiveTab] = useState<RouteConfigType>('/full-service-restaurants');

  const SOLUTION_PACKAGES = useMemo(() => {
    return SOLUTION_CONFIGS.map(item => ({
      ...item,
      title: common(item.title),
      description: common(item.description),
    }));
  }, [common]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab(path);
  }, [path]);

  const menus = useMemo(() => {
    const items = !path
      ? BUSINESS_MENU.slice(0, 5)
      : BUSINESS_MENU.filter(item => !item.href.startsWith(path));

    return items.map(item => ({
      ...item,
      title: common(item.title),
    }));
  }, [asPath, isMobile, common]);

  return (
    <main className={styles['business-types']}>
      <div className={styles['solutions_segment']}>
        <Segmented
          activeKey={activeTab}
          onChange={value => push(value)}
          items={BUSINESS_MENU.map(item => ({
            title: common(item.title),
            value: item.href,
          }))}
        />
      </div>
      {children}
      <BreadCard isGrey>
        <SolutionPackages heading={common('feature_favored')} items={SOLUTION_PACKAGES} />
      </BreadCard>
      <UniqueValue />s
      <BreadCard>
        <BusinessExplore heading={common('explore_other_types')} items={menus as any} />
      </BreadCard>
      <CTAInnerFooter htmlText={common('footer.heading')} bonus={240} sale={7500} />
    </main>
  );
};
