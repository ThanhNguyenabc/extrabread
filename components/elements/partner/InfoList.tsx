import React from 'react';
import InfoListItem from './InfoListItem';

const InfoList = ({ data }: { data: Array<{ title: string; desc: string }> }) => {
  return (
    <div className="grid grid-cols-1 my-4 gap-6 md:grid-cols-2 md:my-8 lg:gap-10 lg:my-10">
      {data.map(item => (
        <InfoListItem key={`${item.title}`} {...item} />
      ))}
    </div>
  );
};

export default InfoList;
