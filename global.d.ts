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
