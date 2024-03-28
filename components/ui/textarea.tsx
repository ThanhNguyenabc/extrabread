import * as React from 'react';

import { cn } from '@/lib/utils';

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        `flex h-10 w-full rounded-md border-2 border-neutral-300 bg-white px-3 py-2 text-base 
          file:border-0 file:bg-transparent file:text-sm file:font-medium 
          placeholder:text-slate-500 
          focus-visible:outline-none focus:border-blue-500
          disabled:cursor-not-allowed disabled:opacity-50`,
        className,
      )}
      {...props}
    />
  );
});
TextArea.displayName = 'TextArea';

export { TextArea };
