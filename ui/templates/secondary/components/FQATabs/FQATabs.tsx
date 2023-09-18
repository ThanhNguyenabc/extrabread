import { Button } from '@/ui/atoms/button/Button';
import { Icon } from '@/ui/atoms/icon/Icon';
import { Segmented } from 'antd';
import { useRef } from 'react';
import styles from './FQATabs.module.scss';

export enum TabsEnum {
  General = 'General',
  PaymentProcessing = 'PaymentProcessing',
  SaleSystem = 'SaleSystem',
  CashDiscount = 'CashDiscount',
  SigningBonus = 'SigningBonus',
}

export type TabType = TabsEnum;
type Props = {
  value: TabType;
  onChange?: (value: TabType) => void;
};

export const FAQTABS = [
  TabsEnum.General,
  TabsEnum.PaymentProcessing,
  TabsEnum.SaleSystem,
  TabsEnum.CashDiscount,
  TabsEnum.SigningBonus,
];

export const FQATabs = ({ onChange, value }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (ref?.current) {
      ref.current.scrollLeft = ref.current.scrollLeft - 400;
    }
  };

  const slideRight = () => {
    console.log(ref.current);
    if (ref?.current) {
      ref.current.scrollLeft = ref.current.scrollLeft + 400;
    }
  };

  const currentPostion = FAQTABS.indexOf(value);
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
        <Segmented defaultValue={value} onChange={onChange as any} options={FAQTABS} />
      </div>
      <div className={styles['swipe-btn']} onClick={slideRight}>
        <Icon name="chevron-right" color="black" size={24} />
      </div>
    </div>
  );
};
