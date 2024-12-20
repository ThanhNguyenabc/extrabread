import React from 'react';

type Props = {
  title: string;
  desc?: string;
};

const SoftwareInfo = ({ title, desc = '' }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-3">
      <p className="txt-heading-xsmal col-span-1 md:txt-heading-small">{title}</p>
      <p className="col-span-2 txt-md text-neutral-700 whitespace-pre-line">{desc}</p>
    </div>
  );
};

export default SoftwareInfo;
