import { Collapse } from 'antd';
import { PropsWithChildren } from 'react';
import { Icon } from '~/ui/atoms/icon/Icon';
import styles from './CollapseHowItWorks.module.scss';

type Props = PropsWithChildren<{
  data: {
    title: string;
    description: string;
  }[];
}>;

export const CollapseHowItWorks = ({ data }: Props) => {
  return (
    <div className={styles['collapse-how-it-works']}>
      <Collapse
        ghost
        expandIconPosition="end"
        className={styles['collapse']}
        expandIcon={props => {
          return <Icon name={props.isActive ? 'chevron-up' : 'chevron-down'} color="black" />;
        }}
      >
        {data.map((item, idx) => (
          <Collapse.Panel header={item.title} key={idx}>
            {item.description}
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
};
