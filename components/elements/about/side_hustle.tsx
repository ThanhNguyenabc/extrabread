import InfoSection from '@/components/ui/info_section';
import { RouteConfig } from '@/constants/routes';
import { PartnerCalling } from '@/ui/img-resource/ImageResources';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const SideHustle = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div className="bg-neutral-100">
      <InfoSection
        imageDirection="left"
        dataConfig={{
          tagConfig: {
            text: t('side_hustle.partner_ship'),
            tagClassName: 'font-semibold text-base',
          },
          title: t('side_hustle.heading'),
          ctaConfig: {
            title: t('learn_more'),
            onClick: () => router.push(RouteConfig.Partner),
          },
          infoClassName: 'font-semibold justify-center md:gap-6',
          desc: t('side_hustle.desc'),
        }}
        image={
          <div className="flex-1 md:h-[244px]">
            <Image
              src={PartnerCalling}
              alt="partner"
              width={580}
              height={244}
              className=" md:h-[244px] object-cover rounded-xl"
            />
          </div>
        }
      />
    </div>
  );
};

export default SideHustle;
