import { Space, Typography } from 'antd';
import classNames from 'classnames';
import { mapModifiers } from 'helpers';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { Icon } from '../icon/Icon';
import styles from './LinkMore.module.scss';

interface Props extends LinkProps {
  text?: string;
  color?: 'black' | 'green';
  size?: 'small' | 'normal';
  className?: string;
}

export const LinkMore = ({ color, size, text = 'Learn more', ...props }: Props) => {
  return (
    <Link
      {...props}
      className={classNames(props.className, mapModifiers('link-more', styles, color, size))}
    >
      <Space>
        <Typography.Text strong className="hover">
          {text}
        </Typography.Text>
        <Icon name="right" color="black" />
      </Space>
    </Link>
  );
};
