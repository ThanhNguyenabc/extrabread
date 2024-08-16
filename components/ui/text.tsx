import React, { HtmlHTMLAttributes, PropsWithChildren } from 'react';

type TextTypes = 'default' | 'paragraph';

const Text = ({
  type = 'default',
  children,
  ...props
}: PropsWithChildren<
  HtmlHTMLAttributes<HTMLSpanElement> & {
    type?: TextTypes;
  }
>) => {
  if (type == 'default') return <span {...props}>{children}</span>;
  return <p {...props}>{children}</p>;
};

export default Text;
