import { Segmented } from 'antd';
import styles from './FQATabs.module.scss';

export enum TabsEnum {
  General = 'General',
  CashDiscount = 'Cash Discount',
  Capital = 'Capital',
}

export type TabType = `${TabsEnum}`;

type Props = {
  defaultValue: TabType;
  onChange?: (value: TabType) => void;
};

export const FQATabs = ({ onChange, defaultValue }: Props) => {
  return (
    <div className={styles['fqaTabs']}>
      <Segmented
        defaultValue={defaultValue}
        onChange={onChange as any}
        options={[TabsEnum.General, TabsEnum.CashDiscount, TabsEnum.Capital]}
      />
    </div>
  );
};
