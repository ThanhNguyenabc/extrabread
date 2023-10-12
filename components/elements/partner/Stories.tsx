import Hero from '@/components/ui/hero';
import React from 'react';

const StoryData = [
  {
    text: '“The competitive products & services that BestPOS provides made it easy for me to secure new clients.”',
    author: 'Bryan',
  },
  {
    text: '“As a bartender, BestPOS allowed me to easily have a second source of income by  simply referring them business.”',
    author: 'Stephanie',
  },
  {
    text: '“The one-on-one training was unmatched and gave me the opportunity to be successfully self-employed.”',
    author: 'Jose',
  },
];

const Stories = () => {
  return (
    <Hero className="gap-4 items-center md:gap-8 lg:gap-10">
      <h3 className="heading-xs text-center md:heading-lg md:max-w-3xl">
        Successful Stories from Our Partnerships
      </h3>
      <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3">
        {StoryData.map(item => (
          <div
            key={`${item.author}`}
            className="flex flex-col bg-neutral-100 gap-4 rounded-2xl p-4 md:p-8 md:gap-6"
          >
            <p className="text-md md:text-lg"> {item.text}</p>
            <span className="text-md-semibold">{item.author}</span>
          </div>
        ))}
      </div>
    </Hero>
  );
};

export default Stories;
