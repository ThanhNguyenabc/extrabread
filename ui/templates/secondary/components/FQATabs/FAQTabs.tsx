import { Icon } from '@/ui/atoms/icon/Icon';
import { Segmented } from 'antd';
import { useTranslation } from 'next-i18next';
import { useMemo, useRef } from 'react';
import styles from './FAQTabs.module.scss';

export enum TabsEnum {
  General = 'General',
  PaymentProcessing = 'Payment Processing',
  SaleSystem = 'Sale System',
  CashDiscount = 'Cash Discount',
  SigningBonus = 'Signing Bonus',
}

export type TabType = TabsEnum;

type Props = {
  value: TabType;
  onChange?: (value: TabType) => void;
};

export const FAQTabs = ({ onChange, value }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { t: common } = useTranslation();

  const TABS = useMemo(
    () => [
      { label: common('general'), value: TabsEnum.General },
      { label: common('payment_processing'), value: TabsEnum.PaymentProcessing },
      { label: common('sale_system'), value: TabsEnum.SaleSystem },
      { label: common('cash_discount'), value: TabsEnum.CashDiscount },
      { label: common('signing_bonus'), value: TabsEnum.SigningBonus },
    ],
    [common],
  );

  const slideLeft = () => {
    if (ref?.current) {
      ref.current.scrollLeft = ref.current.scrollLeft - 400;
    }
  };

  const slideRight = () => {
    if (ref?.current) {
      ref.current.scrollLeft = ref.current.scrollLeft + 400;
    }
  };

  const currentPostion = TABS.findIndex(item => item.value == value);

  return (
    <div className={styles['faq-container']}>
      <div
        className={styles['swipe-btn']}
        onClick={slideLeft}
        style={{
          visibility: currentPostion >= 2 ? 'visible' : 'hidden',
        }}
      >
        <Icon name="chevron-left" color="black" />
      </div>
      <div ref={ref} className={styles['fqa-tabs']}>
        <Segmented defaultValue={value} onChange={onChange as any} options={TABS} />
      </div>
      <div className={styles['swipe-btn']} onClick={slideRight}>
        <Icon name="chevron-right" color="black" size={24} />
      </div>
    </div>
  );
};
