import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  `inline-flex items-center font-semibold rounded-full text-base 
  px-4 transition-colors focus:outline-none focus:ring-2 
  focus:ring-slate-950 focus:ring-offset-2
  md:text-base
  `,
  {
    variants: {
      variant: {
        default: 'w-fit border-transparent bg-neutral-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
