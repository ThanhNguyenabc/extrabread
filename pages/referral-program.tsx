import ReferralProgram from '@/components/elements/partner/referral/ReferralProgram';
import Hero from '@/components/ui/hero';
import { getSEOTag } from '@/pages/api/app-configs';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('partner', locale),
    serverSideTranslations(locale ?? 'en', ['common']),
  ]);
  return {
    props: {
      seoTag,
      ...translation,
    },
    revalidate: 120,
  };
};

const ReferralProgramPage = () => {
  const router = useRouter();
  return (
    <Hero className="lg:max-w-3xl">
      <ReferralProgram
        showHeaderCloseButton={false}
        onSubmitSuccess={() => {
          setTimeout(() => router.replace('/'), 2000);
        }}
      />
    </Hero>
  );
};

export default ReferralProgramPage;
