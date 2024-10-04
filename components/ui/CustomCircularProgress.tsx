import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { CircularProgressbarWrapperProps } from 'react-circular-progressbar/dist/types';

import { COLORS } from '@/constants/colors';
import GradientSVG from './GradientSVG';

interface CustomCircularProgressProps extends CircularProgressbarWrapperProps {
  className?: string;
  value: number;
  id: string;
  children?: React.ReactNode;
}
const CustomCircularProgress = ({
  className,
  id,
  children,
  ...any
}: CustomCircularProgressProps) => {
  return (
    <div className={`${className}`}>
      <GradientSVG id={id} />
      <CircularProgressbarWithChildren
        strokeWidth={10}
        maxValue={10}
        {...any}
        styles={{
          path: {
            stroke: `url(#${id})`,
            transition: 'stroke-dashoffset 0.5s ease 0s',
            height: '100%',
            transform: 'rotate(1turn)',
          },
          trail: {
            stroke: COLORS['neutral'][100],
            strokeLinecap: 'butt',
            transform: 'rotate(1turn)',
          },
        }}
      >
        {children}
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CustomCircularProgress;
