import { LayoutProps } from 'antd';
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './Container.module.scss';

export const Container: FC<PropsWithChildren<LayoutProps>> = ({ children, ...props }) => {
  return (
    <section {...props} className={classNames(styles.container, props.className)}>
      {children}
    </section>
  );
};
