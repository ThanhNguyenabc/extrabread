import { getSuggestPOS } from '@/apis';
import Box from '@/components/ui/bestpos/Box';
import { Button } from '@/components/ui/button';
import { RouteConfig } from '@/constants/routes';
import { getCurrentMonth } from '@/helpers/date';
import { MetaTag } from '@/models/bestpos/app_configs';
import { SuggestPOSParams } from '@/models/bestpos/suggest_pos_request_param';
import { IcChevronRight } from '@/ui/img-resource/ExIcon';
import { Seo } from '@/ui/util-components/Seo';
import POSCard from 'components/elements/pos_card/POSCard';
import RecommendPOSCard from 'components/elements/recommend_card/RecommendPOSCard';
import useTrans from 'hooks/useTrans';
import { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React from 'react';
import useSWRImmutable from 'swr/immutable';
import { getSEOTags } from './api/configs';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { access, business, salesystem, stations, handheld, discount } = context.query;
  if (access) {
    const [seoTag, translations] = await Promise.all([
      getSEOTags('suggestPOS'),
      serverSideTranslations(context.locale ?? 'en', ['common', 'suggest_pos', 'pos_systems']),
    ]);
    return {
      props: {
        ...translations,
        seoTag,
        params: {
          business,
          salesystem,
          stations,
          handheld,
          discount,
        },
      },
    };
  }
  return {
    redirect: {
      permanent: false,
      destination: RouteConfig.Home,
    },
    props: {},
  };
};

const SuggestPOSPage = ({ params, seoTag }: { params: SuggestPOSParams; seoTag: MetaTag }) => {
  const { locale } = useTrans();
  const { t } = useTranslation('suggest_pos');
  const { t: common } = useTranslation('common');

  const key = `${params.business}-${params.discount}-${params.handheld}-${params.salesystem}-${params.stations}`;
  const { data: suggestProducts } = useSWRImmutable(key, () => getSuggestPOS(params));

  return (
    <>
      <Seo title={seoTag.title[locale]} description={seoTag.description[locale]} />
      <div className={`flex flex-col bg-neutral-100`}>
        <div className=" block bg-[#D1FADF] h-[240px] md:h-[360px]" />s
        <Box
          className="absolute left-0 right-0 container-content gap-2 md:gap-4 pt-6 items-center
         text-center md:pt-14"
        >
          <p className="txt-sm-bold">{`${common('last_updated')} ${getCurrentMonth(locale)}`}</p>
          <h1 className="txt-heading-medium text-success max-w-[820px] md:txt-heading-large">
            {t('heading')}
          </h1>
          <h2 className="txt-md">
            {t('desc')}
            <Link href={RouteConfig.Contacts} className="font-semibold underline">
              {common('contact_us')}
            </Link>
          </h2>
          {suggestProducts && (
            <RecommendPOSCard classname="z-1 top-7 md:top-[40px]" data={suggestProducts?.[0]} />
          )}
        </Box>
        <Box className="container-content pb-10 pt-[270px] gap-4 md:pt-[160px] md:gap-6 items-center">
          <p className="txt-large-bold"> {t('otherPOS')}</p>
          {suggestProducts?.map((item, index) => {
            if (index > 0) return <POSCard key={`item-pos-${index}`} data={item} />;
          })}
          <Link href={RouteConfig.POSSystems}>
            <Button className="w-fit self-center">
              More POS systems
              <IcChevronRight />
            </Button>
          </Link>
        </Box>
      </div>
    </>
  );
};

export default SuggestPOSPage;
