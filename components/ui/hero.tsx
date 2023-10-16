import { cn } from '@/lib/utils';
import React from 'react';

const Hero = React.forwardRef<HTMLDivElement, React.HtmlHTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn(
        `container flex flex-col px-4 py-10 
      md:py-12 md:px-10 
      lg:px-6 
      xl:py-20 xl:px-0`,
        className,
      )}
    >
      {children}
    </div>
  ),
);

export default Hero;
