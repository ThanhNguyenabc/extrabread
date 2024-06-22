import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useState } from 'react';
import { PRODUCTS_MENU } from '~/constants/index';
import { Segmented } from '~/ui/atoms/segment/Segment';
import styles from './ProductsTemplate.module.scss';
import { RouteConfigType } from '@/constants/routes';

export const ProductsTemplate = ({ children }: PropsWithChildren) => {
  const { push, asPath } = useRouter();
  const { t: common } = useTranslation();

  const path = asPath as RouteConfigType;
  const [activeTab, setActiveTab] = useState<RouteConfigType>('/clover-app-market');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab(path);
  }, [path]);

  return (
    <main className={styles['solutions']}>
      <div className={styles['solutions_segment']}>
        <Segmented
          activeKey={activeTab}
          onChange={value => push(value)}
          items={PRODUCTS_MENU.map(item => ({
            title: common(item.title),
            value: item.href,
          }))}
        />
      </div>
      {children}
    </main>
  );
};
