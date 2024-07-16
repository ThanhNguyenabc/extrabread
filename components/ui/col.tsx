import { cn } from '@/lib/utils';
import React from 'react';

const Col = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...other }, ref) => {
    return (
      <div ref={ref} className={cn('flex flex-col', className)} {...other}>
        {children}
      </div>
    );
  },
);

export default Col;
