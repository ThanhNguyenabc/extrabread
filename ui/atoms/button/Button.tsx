import { Button as AntButton, ButtonProps, ConfigProvider } from 'antd';
import variables from 'assets/styles/variables.module.scss';
import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './Button.module.scss';

export interface BreadButtonProps extends ButtonProps {
  color?: 'black';
  direction?: 'left' | 'right';
}
const { textColor } = variables;

export const Button = forwardRef<HTMLButtonElement, BreadButtonProps>(
  ({ className, color, ...rest }, ref) =>
    color === 'black' ? (
      <ConfigProvider
        theme={{
          hashed: true,
          token: { colorPrimary: textColor },
        }}
      >
        <AntButton {...rest} ref={ref} className={classNames(styles.button, className)} />
      </ConfigProvider>
    ) : (
      <AntButton {...rest} ref={ref} className={classNames(styles.button, className)} />
    ),
);
