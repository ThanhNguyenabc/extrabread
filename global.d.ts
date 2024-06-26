// declare module '*.svg' {
//   /**
//    * Use `any` to avoid conflicts with
//    * `@svgr/webpack` plugin or
//    * `babel-plugin-inline-react-svg` plugin.
//    */
//   const content: {
//     className?: string;
//   };

//   export default content;
// }

export declare global {
  interface Window {
    dataLayer: {
      push: (obj: any) => void;
    };
  }
}

declare module 'public/images/icons/*.svg' {
  import { FC, SVGProps } from 'react';
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}


declare module 'public/images/color-icons/*.svg' {
  import { FC, SVGProps } from 'react';
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}
