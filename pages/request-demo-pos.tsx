import RequestDemoPOS from '@/components/elements/request_demo_pos/RequestDemoPOS';
import Flex from '@/components/ui/flex';
import { RouteConfig } from '@/constants/routes';
import { Meta } from '@/models/app_config.model';
import { CTAInnerFooter } from '@/ui/organisms/cta-inner-footer/CTAInnerFooter';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next/types';
import { useCallback } from 'react';
import { Seo } from '~/ui/util-components/Seo';
import { getSEOTag } from './api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('requestDemoPOS', locale),
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

const HomePage = ({ seoTag }: { seoTag?: Meta }) => {
  const { t: common } = useTranslation();
  const { title, description, keywords, image } = seoTag || {};
  const router = useRouter();

  const navigateToHomePage = useCallback(() => {
    setTimeout(() => {
      router.replace(RouteConfig.Home);
    }, 1500);
  }, []);

  return (
    <>
      <Flex className="w-full lg:max-w-2xl mx-auto">
        <Seo title={title} description={description} keywords={keywords} imageFeature={image}></Seo>
        <RequestDemoPOS showCloseButton={false} afterSubmit={navigateToHomePage} />
      </Flex>
      <CTAInnerFooter htmlText={common('footer.heading')} bonus={2500} sale={250000} />
    </>
  );
};

export default HomePage;
