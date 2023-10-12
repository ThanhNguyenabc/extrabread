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
    const bgColor = type == 'primary' ? primaryColor : 'white';
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
            style={{ backgroundColor: bgColor }}
          />
        </ConfigProvider>
      );

    return (
      <AntButton
        {...rest}
        type={type}
        ref={ref}
        className={classNames(styles.button, className)}
        style={{ backgroundColor: bgColor }}
      />
    );
  },
);
