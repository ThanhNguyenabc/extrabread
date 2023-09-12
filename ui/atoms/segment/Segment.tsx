/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Tabs, TabsProps } from 'antd';
import styles from './Segment.module.scss';

type Props = Omit<TabsProps, 'items'> & {
  items: { title: string; value: string }[];
};

export const Segmented = ({ items, ...props }: Props) => {
  return (
    <div className={styles['tabs']}>
      <Tabs
        className={styles['tabs_inner']}
        items={items.map(item => {
          return {
            label: item.title,
            key: item.value,
          };
        })}
        {...props}
      />
    </div>
  );
};
