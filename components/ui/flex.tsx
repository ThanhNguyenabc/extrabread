import React from 'react';

const Flex = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...other }, ref) => {
    return (
      <div ref={ref} className={className} {...other}>
        {children}
      </div>
    );
  },
);

export default Flex;
