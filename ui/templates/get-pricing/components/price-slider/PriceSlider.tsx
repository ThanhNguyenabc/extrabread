import { Slider, Typography } from 'antd';
import { SliderMarks } from 'antd/es/slider';
import variables from 'assets/styles/variables.module.scss';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Heading } from '~/ui/atoms/heading/Heading';
import styles from './PriceSlider.module.scss';

const { Text } = Typography;
const { primaryColor, neutral200 } = variables;

type Props = {
  onChange?: (values: any) => void;
};

const marks: SliderMarks = {
  0: '$0',
  50: '$50K',
  100: '$100K',
  150: '$150K',
  200: '$200K+',
};
export const PriceSlider = ({ onChange, ...props }: Props) => {
  const { t } = useTranslation('questionnaire');
  const { t: common } = useTranslation();

  const [price, setPrice] = useState(50);
  return (
    <div className={styles.priceSlider}>
      <div className={styles['priceSlider_slider-wrapper']}>
        <Flex gap={16} gapSp={8} direction="column">
          <Heading level={3}>$0 - ${common('p[rice') ? common('price') + 'K+' : '0'}</Heading>
          <Text className="f-body-lg-semi text-grey">{t('processing_volume')}</Text>
        </Flex>
        <Slider
          min={0}
          max={200}
          marks={marks}
          step={10}
          defaultValue={price}
          trackStyle={{ backgroundColor: primaryColor }}
          railStyle={{ backgroundColor: neutral200 }}
          rootClassName={styles['priceSlider_slider']}
          tooltip={{ open: false }}
          onChange={value => {
            onChange?.(value);
            setPrice(value);
          }}
          {...props}
        />
      </div>
    </div>
  );
};
