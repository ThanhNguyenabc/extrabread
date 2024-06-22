import { RouteConfig } from '@/constants/routes';
import { BreadCard } from '@/ui/atoms/bread-card/BreadCard';
import { Button } from '@/ui/atoms/button/Button';
import { Collapse, Panel } from '@/ui/atoms/collapse/Collapse';
import { Flex } from '@/ui/atoms/flex/Flex';
import { Icon } from '@/ui/atoms/icon/Icon';
import { WorkWithTheBest } from '@/ui/organisms/work-with-the-best/WorkWithTheBest';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { SOLUTIONS_MENU } from '~/constants/index';
import { Heading } from '~/ui/atoms/heading/Heading';
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
  const { t: common } = useTranslation('common');
  const { t } = useTranslation('solutions');

  const { push, query } = useRouter();
  const slug = (query['slug'] as string) || '';
  const [activeTab, setActiveTab] = useState(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab(slug);
  }, [slug]);

  const Cmp = PAGES[activeTab] || null;

  const FAQItems = useMemo(() => {
    return t('faq.items', { returnObjects: true }) as Array<any>;
  }, [t]);

  return (
    <main className={styles['solutions']}>
      <div className={styles['solutions_segment']}>
        <Segmented
          activeKey={`${RouteConfig.Solution}/${activeTab}`}
          onChange={value => push(value)}
          items={SOLUTIONS_MENU.map(item => ({
            title: common(item.title) || '',
            value: item.href,
          }))}
        />
      </div>
      {Cmp && (
        <Cmp>
          <BreadCard>
            <Heading level={3} centered>
              {common('frequently_questions')}
            </Heading>

            <Collapse>
              {Array.isArray(FAQItems) &&
                FAQItems?.map(({ header, content }) => (
                  <Panel header={header} key={header}>
                    {content}
                  </Panel>
                ))}
            </Collapse>

            <div className={styles['solutions_faq-button']}>
              <Button>
                <Link href={RouteConfig.Faqs}>
                  <Flex gap={8}>
                    {common('learn_more')}
                    <Icon name="right" />
                  </Flex>
                </Link>
              </Button>
            </div>
          </BreadCard>

          <WorkWithTheBest />
        </Cmp>
      )}
      <CTAInnerFooter htmlText={common('footer.heading')} bonus={240} sale={7500} />
    </main>
  );
};
