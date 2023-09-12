import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './BreadCard.module.scss';

export const BreadCard: FC<
  PropsWithChildren<
    React.HTMLAttributes<HTMLDivElement> & {
      isGrey?: boolean;
      noPadding?: boolean;
      innerClassName?: string;
    }
  >
> = ({ children, isGrey, noPadding, innerClassName, ...props }) => {
  return (
    <section
      {...props}
      className={classNames(
        styles['bread-card'],
        isGrey && styles['bread-card--grey'],
        noPadding && styles['bread-card--no-padding'],
        props.className,
      )}
    >
      <div className={classNames(styles['bread-card_inner'], innerClassName)}>{children}</div>
    </section>
  );
};
