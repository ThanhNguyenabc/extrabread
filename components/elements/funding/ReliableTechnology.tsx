import Hero from '@/components/ui/hero';
import Image from 'next/image';
import React from 'react';

const ReliableItems = [
  {
    id: 'security',
    title:
      'Our team excels in ensuring you get the ideal POS system tailored to your industry or business niche. Cygma uses the latest technology and security to ensure your data is safe.',
    img: 'https://res.cloudinary.com/dgrym3yz3/image/upload/v1719464791/extrabread/common/s4zsrmvslesndz3ewujs.png',
  },
  {
    id: 'support',

    title:
      'With Exatouch, Micros, Aloha, Authorize.net, NMI, ePN, USAEPay, Dejavoo P Series, Dejavoo QD, PAX, Ingenico, FreedomPay, etc.\n\nCygma is supported. We can support nearly any of the solutions out there and provide top-notch equipment for seamless transactions. ',
    img: 'https://res.cloudinary.com/dgrym3yz3/image/upload/v1719464791/extrabread/common/xufrexmzwymxklkbaf9t.png',
  },
];
const ReliableTechnology = () => {
  return (
    <Hero className="gap-6 md:gap-8 lg:flex-row lg:gap-10">
      <h3 className="heading-xs md:heading-lg">
        {`Reliable Technology`}
      </h3>
      <div className="flex flex-1 flex-col gap-6">
        {ReliableItems.map(({ id, title, img }) => (
          <div key={id} className="flex flex-row gap-4 items-center md:gap-6">
            <div className=" relative w-[80px] aspect-square  md:w-[148px]">
              <Image
                fill
                quality={100}
                alt={id}
                src={img}
                sizes="(max-width: 768px) 100vw, 20vw"
                />
            </div>
            <p className="flex-1 whitespace-pre-line md:text-lg">{title}</p>
          </div>
        ))}
      </div>
    </Hero>
  );
};

export default ReliableTechnology;
