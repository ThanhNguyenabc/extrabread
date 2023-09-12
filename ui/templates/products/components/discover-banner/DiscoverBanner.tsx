import { mapModifiers } from 'helpers';
import { FC, PropsWithChildren } from 'react';
import { BreadButtonProps } from '~/ui/atoms/button/Button';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Heading } from '~/ui/atoms/heading/Heading';
import styles from './DiscoverBanner.module.scss';

type Props = {
  heading: string;
  buttonColor?: BreadButtonProps['color'];
  type?: 'product';
};

export const DiscoverBanner: FC<PropsWithChildren<Props>> = ({
  heading,
  children,
  buttonColor,
  type,
}) => {
  return (
    <div className={mapModifiers('discover-banner', styles, type)}>
      <Heading centered level={3}>
        {heading}
      </Heading>
      {children}
      <GetPricingButton
        className={styles['discover-banner_button']}
        size="large"
        color={buttonColor}
      />
    </div>
  );
};
