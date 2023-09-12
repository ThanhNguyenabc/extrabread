import mapClassnames from 'classnames';
import { mapModifiers } from 'helpers/component';
import { CSSProperties } from 'react';
import styles from './Icon.module.scss';

export const ICON_SHAPES = [
  'zoom-in',
  'zoom-out',
  'android',
  'apple',
  'atm',
  'calendar',
  'check',
  'check-circle',
  'check-circle-solid',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'clock',
  'close',
  'cloud',
  'credit-card',
  'delete',
  'dollar',
  'dollar-off',
  'down',
  'error',
  'facebook',
  'face-dissatisfied',
  'face-satisfied',
  'left',
  'headset',
  'home',
  'info',
  'instagram',
  'light-bulb',
  'light-bulb-2',
  'link',
  'linkedin',
  'location',
  'mail',
  'map',
  'menu',
  'minus',
  'minus-circle',
  'money',
  'paid',
  'phone',
  'pie-chart',
  'plus',
  'plus-circle',
  'point-of-sale',
  'quick',
  'right',
  'search',
  'shield-fill',
  'shield-line',
  'star-filled',
  'store',
  'support',
  'tag',
  'thumb-down',
  'thumb-up',
  'up',
  'verified',
  'windows',
  'waving-hand',
  'verified-fill',
  'account-balance-wallet',
  'contactless',
  'inventory',
  'library-add-check',
  'list-alt',
  'local-shipping',
  'loyalty',
  'list',
  'manage-accounts',
  'phone-iphone',
  'qr-code',
  'verified-user',
  'wallet',
] as const;

export const ICON_COLORS = [
  'green',
  'green-active',
  'black',
  'grey',
  'light',
  'red',
  'white',
] as const;

interface IconProps {
  className?: string;
  style?: CSSProperties;
  name: (typeof ICON_SHAPES)[number];
  color?: (typeof ICON_COLORS)[number];
  size?: number;
  animation?: boolean;
  onClick?: VoidFunction;
}

export const Icon: React.FC<IconProps> = ({
  className: addClass,
  name,
  size,
  style,
  animation,
  onClick,
  color = 'black',
}) => {
  const _style = size ? { width: size, height: size } : {};
  const className = mapModifiers('a-icon', styles, name, color, animation && 'animation');
  const classNames = mapClassnames(className, addClass);

  return <i onClick={onClick} className={classNames} style={{ ...style, ..._style }} />;
};
