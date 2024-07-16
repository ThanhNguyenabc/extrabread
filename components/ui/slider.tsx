import { Slider as NSlider, SliderProps } from '@nextui-org/react';
import React from 'react';
const Slider = (props: SliderProps) => {
  return (
    <NSlider
      size="md"
      {...props}
      showTooltip
   
      tooltipProps={{
        size: 'md',
      }}
    />
  );
};

export default Slider;
