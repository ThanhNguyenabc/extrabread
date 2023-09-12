import classNames from 'classnames';
import { FC } from 'react';
import styles from './NewRate.module.scss';

interface Props {
  value: number;
  gutter: number;
  size?: number;
}
export const NewRate: FC<Props> = ({ value, gutter, size = 20 }) => {
  const hasHalf = value % 1 !== 0;

  return (
    <div
      className={classNames(styles['newRate'], styles[`newRate--${size}`])}
      style={{ columnGap: gutter }}
    >
      {Array.from(Array(Math.floor(value)).keys()).map(item => (
        <img
          key={item}
          src="/images/color-icons/rate-full.png"
          alt="rate"
          width={size}
          height={size}
        />
      ))}
      {hasHalf && (
        <img src="/images/color-icons/rate-half.png" alt="rate" width={size} height={size} />
      )}
    </div>
  );
};
