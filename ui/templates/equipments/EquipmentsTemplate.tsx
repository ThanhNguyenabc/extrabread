import { useHookstate } from '@hookstate/core';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useState } from 'react';
import { BUSINESS_MENU, EQUIPMENTS_MENU, RouteConfigType } from '~/constants/index';
import { commonState } from '~/hooks/useCtaFooterState';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Segmented } from '~/ui/atoms/segment/Segment';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import { CTAInnerFooter } from '~/ui/organisms/cta-inner-footer/CTAInnerFooter';
import { BreadFooter } from '~/ui/organisms/footer/Footer';
import styles from './EquipmentsTemplate.module.scss';

export const EquipmentsTemplate = ({ children }: PropsWithChildren) => {
  const { push, asPath } = useRouter();
  const path = asPath as RouteConfigType;
  const [activeTab, setActiveTab] = useState<RouteConfigType>('/revel');

  const state = useHookstate(commonState);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab(path);

    return () => {
      state.footerText.set(undefined);
      state.suggestedBusiness.set(undefined);
    };
  }, [asPath]);

  return (
    <main className={styles['equipments-template']}>
      <div className={styles['equipments-template_segment']}>
        <Segmented
          activeKey={activeTab}
          onChange={value => push(value)}
          items={EQUIPMENTS_MENU.map(item => ({
            title: item.title,
            value: item.href,
          }))}
        />
      </div>

      {children}

      <BreadCard>
        <AllBusinesses
          noColor
          type="product"
          cardClassName={styles['equipments-template_cate-card']}
          heading={['Suggested Types of Business']}
          list={BUSINESS_MENU}
        />
      </BreadCard>

      <CTAInnerFooter bonus={240} sale={7500} />
    </main>
  );
};
