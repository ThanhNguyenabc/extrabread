import React, { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';

const NonSSRWrapper = (props: PropsWithChildren) => (
  <React.Fragment>{props.children}</React.Fragment>
);
const SafeHydrate = dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});

export default SafeHydrate;
