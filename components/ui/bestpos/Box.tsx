import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface BoxProps {
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

const Box = ({ className = '', style = {}, children }: BoxProps) => {
  return (
    <div className={twMerge(`flex flex-col px-4 md:px-8`, className)} style={style}>
      {children}
    </div>
  );
};

export default Box;
