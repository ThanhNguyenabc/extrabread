import React from 'react';

const InfoListItem = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex flex-col gap-2 pl-4 border-l-4 border-green-500 lg:pl-6 md:gap-4">
      <p className="text-md-semibold md:heading-xs">{title}</p>
      <p className="text-base text-neutral-700">{desc}</p>
    </div>
  );
};

export default InfoListItem;
