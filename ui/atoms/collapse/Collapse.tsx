import { Collapse as AntCollapse } from 'antd';
import { PropsWithChildren } from 'react';
import { Icon } from '../icon/Icon';
import styles from './Collapse.module.scss';

export const Collapse = ({ children }: PropsWithChildren) => {
  return (
    <AntCollapse
      ghost
      expandIconPosition="end"
      className={styles['collapse']}
      expandIcon={props => {
        return <Icon name={props.isActive ? 'chevron-up' : 'chevron-down'} color="black" />;
      }}
    >
      {children}
    </AntCollapse>
  );
};

export const { Panel } = AntCollapse;
