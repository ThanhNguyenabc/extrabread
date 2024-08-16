import React, { HtmlHTMLAttributes } from 'react';

type Props = HtmlHTMLAttributes<HTMLHeadElement> & {
  level: "1" | "2" | "3" | "4" | "5";
};
const Heading = ({ level, children, ...other }: Props) => {
  const CMP = `h${level}`;
  return React.createElement(CMP, other, children);
};

export default Heading;
