import { Button as AntButton, ButtonProps, ConfigProvider } from 'antd';
import variables from 'assets/styles/variables.module.scss';
import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './Button.module.scss';

export interface BreadButtonProps extends ButtonProps {
  color?: 'black';
  direction?: 'left' | 'right';
}
const { textColor, primaryColor } = variables;

export const Button = forwardRef<HTMLButtonElement, BreadButtonProps>(
  ({ className, color, type, ...rest }, ref) => {
    if (color == 'black')
      return (
        <ConfigProvider
          theme={{
            hashed: true,
            token: { colorPrimary: textColor },
          }}
        >
          <AntButton
            {...rest}
            type={type}
            ref={ref}
            className={classNames(styles.button, className)}
            style={{ backgroundColor: color }}
          />
        </ConfigProvider>
      );

    return (
      <AntButton
        {...rest}
        type={type}
        ref={ref}
        className={classNames(styles.button, className)}
        style={{
          backgroundColor: type == 'primary' ? color || primaryColor : 'white',
        }}
      />
    );
  },
);
