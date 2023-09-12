import { Typography } from 'antd';
import React from 'react';
import { Button } from '~/ui/atoms/button/Button';
import styles from './GetPricing.module.scss';

const { Text } = Typography;

type Props = {
  onNext?: VoidFunction;
};

export const IntroduceContent = (props: Props) => {
  return (
    <div className={styles['get-pricing_introduce']}>
      <Text className={styles['get-pricing_introduce-heading']}>
        Get pricing for POS and CC processing packages
      </Text>

      <Text className={styles['get-pricing_introduce-text']}>
        To ensure we provide the most effective payment processing, point of sale solutions & cash
        signing bonus for your business, we require some initial information from you.{' '}
      </Text>

      <Button onClick={props.onNext} type="primary" color="black" block className="mt-40">
        Get Started
      </Button>
    </div>
  );
};
