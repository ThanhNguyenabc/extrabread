import React, { FC, PropsWithChildren, useRef } from 'react';

type Prop = {
  colGap?: number;
  rowGap?: number;
};

export const Grid: FC<PropsWithChildren<Prop>> = props => {
  const gridRef = useRef(null);
  return <div ref={gridRef}>{props.children}</div>;
};
