import { COLORS } from '@/constants/colors';
import React from 'react';
const GradientSVG = ({ id }: { id: string }) => {
  const gradientTransform = `rotate(90)`;
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={id} gradientTransform={gradientTransform}>
          <stop offset="10%" stopColor={COLORS.orange[600]} />
          <stop offset="100%" stopColor={'#FFA722'} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientSVG;
