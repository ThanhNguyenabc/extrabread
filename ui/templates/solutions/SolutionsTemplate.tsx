import { getHash } from 'helpers';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SOLUTIONS_MENU } from '~/constants/index';
import { Segmented } from '~/ui/atoms/segment/Segment';
import { CTAInnerFooter } from '~/ui/organisms/cta-inner-footer/CTAInnerFooter';
import { CreditCardTerminal } from './CreditCardTerminal';
import { MobileCardReader } from './MobileCardReader';
import { OnlineProcessing } from './OnlineProcessing';
import styles from './Solutions.module.scss';

enum SolutionSubMenus {
  CreditCardTerminal = '#credit-card',
  MobileCardReader = '#mobile-card',
  OnlineProcessing = '#online-processing',
}

export const SolutionsTemplate = () => {
  const { push, asPath, pathname } = useRouter();
  const hash = getHash(asPath) as any;
  const [activeTab, setActiveTab] = useState<`${SolutionSubMenus}`>(
    SolutionSubMenus.CreditCardTerminal,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (hash === '#') {
      return;
    }
    setActiveTab(hash);
  }, [asPath]);

  return (
    <main className={styles['solutions']}>
      <div className={styles['solutions_segment']}>
        <Segmented
          activeKey={activeTab}
          onChange={value => push(`${pathname}${value}`)}
          items={SOLUTIONS_MENU.map(item => ({
            title: item.title,
            value: getHash(item.href),
          }))}
        />
      </div>

      {activeTab === SolutionSubMenus.CreditCardTerminal && <CreditCardTerminal />}
      {activeTab === SolutionSubMenus.MobileCardReader && <MobileCardReader />}
      {activeTab === SolutionSubMenus.OnlineProcessing && <OnlineProcessing />}

      <CTAInnerFooter
        htmlText="Discover the perfect point of sale system for your business today!"
        bonus={240}
        sale={7500}
      />
    </main>
  );
};
