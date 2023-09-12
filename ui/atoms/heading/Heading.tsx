import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';
import classNames from 'classnames';
import { mapModifiers } from 'helpers/component';
import styles from './Heading.module.scss';

export const Heading = ({
  centered,
  size,
  wrapper = 'tablet',
  ...props
}: TitleProps & {
  centered?: boolean;
  size?: 'sm' | 'xs';
  wrapper?: 'pc' | 'tablet';
}) => {
  return size ? (
    <Typography.Text
      {...props}
      className={classNames(
        mapModifiers('heading', styles, size, wrapper, centered && 'centered'),
        props.className,
        'heading',
      )}
    >
      {props.children}
    </Typography.Text>
  ) : (
    <Typography.Title
      {...props}
      style={{ marginBottom: 0, fontWeight: 800, ...props.style }}
      className={classNames(
        mapModifiers('heading', styles, size, wrapper, centered && 'centered'),
        props.className,
        'heading',
      )}
    >
      {props.children}
    </Typography.Title>
  );
};

export const SectionHeading = ({
  heading,
  subHeading,
  noMargin,
  centered,
  centerSp,
  noAlignLeft,
  level = 3,
  ...props
}: TitleProps & {
  heading: JSX.Element | string;
  subHeading?: JSX.Element | string;
  noMargin?: boolean;
  centered?: boolean;
  centerSp?: boolean;
  noAlignLeft?: boolean;
}) => {
  return (
    <div
      className={classNames(
        styles['section-heading'],
        centered && styles['section-heading--centered'],
        centerSp && styles['section-heading--centerSp'],
        noAlignLeft && styles['section-heading--noAlignLeft'],
        !noMargin && 'mb-24',
        'heading',
      )}
    >
      <Heading {...props} level={level} style={{ lineHeight: 1 }}>
        {heading}
      </Heading>
      {subHeading && (
        <Typography.Text className="font-18-16-14 text-grey">{subHeading}</Typography.Text>
      )}
    </div>
  );
};
