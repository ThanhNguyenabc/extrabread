import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { RouteConfig, SOLUTIONS_MENU } from '~/constants/index';
import { Segmented } from '~/ui/atoms/segment/Segment';
import { CTAInnerFooter } from '~/ui/organisms/cta-inner-footer/CTAInnerFooter';
import { CreditCardTerminal } from './CreditCardTerminal';
import { MobileCardReader } from './MobileCardReader';
import { OnlineProcessing } from './OnlineProcessing';
import styles from './Solutions.module.scss';

enum SolutionSubMenus {
  CreditCardTerminal = 'credit-card',
  MobileCardReader = 'mobile-card',
  OnlineProcessing = 'online-processing',
}

const PAGES = {
  [SolutionSubMenus.CreditCardTerminal]: CreditCardTerminal,
  [SolutionSubMenus.MobileCardReader]: MobileCardReader,
  [SolutionSubMenus.OnlineProcessing]: OnlineProcessing,
};

export const SolutionsTemplate = () => {
  const { push, query } = useRouter();
  const slug = (query['slug'] as string) || '';
  const [activeTab, setActiveTab] = useState(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab(slug);
  }, [slug]);

  const Cmp = PAGES[activeTab] || null;

  return (
    <main className={styles['solutions']}>
      <div className={styles['solutions_segment']}>
        <Segmented
          activeKey={`${RouteConfig.Solution}/${activeTab}`}
          onChange={value => push(value)}
          items={SOLUTIONS_MENU.map(item => ({
            title: item.title,
            value: item.href,
          }))}
        />
      </div>
      {Cmp && <Cmp />}
      <CTAInnerFooter
        htmlText="Discover the perfect point of sale system for your business today!"
        bonus={240}
        sale={7500}
      />
    </main>
  );
};
