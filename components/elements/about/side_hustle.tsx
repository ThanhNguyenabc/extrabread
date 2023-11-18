import InfoSection from '@/components/ui/info_section';
import { RouteConfig } from '@/constants';
import { PartnerCalling } from '@/ui/img-resource/ImageResources';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const SideHustle = () => {
  const router = useRouter();

  return (
    <div className="bg-neutral-100">
      <InfoSection
        imageDirection="left"
        dataConfig={{
          tagConfig: {
            text: 'Partnership',
            tagClassName: 'font-semibold text-base',
          },
          title: 'The Ultimate Side Hustle',
          ctaConfig: {
            title: 'Learn more',
            onClick: () => router.push(RouteConfig.Partner),
          },
          infoClassName: 'font-semibold justify-center md:gap-6',
          desc: 'Partner with ExtraBread today and start your side hustle journey!',
        }}
        image={
          <div className="flex-1 md:h-[244px]">
            <Image
              src={PartnerCalling}
              alt="partner"
              className=" md:h-[244px] object-cover rounded-xl"
            />
          </div>
        }
      />
    </div>
  );
};

export default SideHustle;
