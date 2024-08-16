import { cn } from '@/lib/utils';
import React, { forwardRef, HtmlHTMLAttributes } from 'react';

const Row = forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...other }, ref) => (
    <div ref={ref} className={cn('flex flex-row', className)} {...other}>
      {children}
    </div>
  ),
);
export default Row;
