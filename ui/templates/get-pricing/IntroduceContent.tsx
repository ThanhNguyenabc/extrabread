import { Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { Button } from '~/ui/atoms/button/Button';
import styles from './GetPricing.module.scss';

const { Text } = Typography;

type Props = {
  onNext?: VoidFunction;
};

export const IntroduceContent = (props: Props) => {
  const { t: common } = useTranslation();
  const { t } = useTranslation('questionnaire');

  return (
    <div className={styles['get-pricing_introduce']}>
      <Text className={styles['get-pricing_introduce-heading']}>
        {t('heading')}
      </Text>

      <Text className={styles['get-pricing_introduce-text']}>
      
        {t('description')}
      </Text>

      <Button onClick={props.onNext} type="primary" color="black" block className="mt-40">
        {common('get_started')}
      </Button>
    </div>
  );
};
