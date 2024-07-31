import { Slider as NSlider, SliderProps } from '@nextui-org/react';
import React from 'react';
import Col from './col';
import Row from './row';
import Text from './text';

const Slider = (
  props: SliderProps & { leftLabel: string; rightLabel: string; labelStyle?: string },
) => {
  const { leftLabel, rightLabel, labelStyle, ...other } = props || {};

  return (
    <Col>
      <NSlider
        size="md"
        showTooltip
        tooltipProps={{
          size: 'md',
        }}
        {...other}
      />
      <Row className={labelStyle}>
        <Text>{leftLabel}</Text>
        <Text>{rightLabel}</Text>
      </Row>
    </Col>
  );
};

export default Slider;
