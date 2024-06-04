import { Meta } from '@/models/app_config.model';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next/types';
import { HomeTemplate } from '~/ui/templates/home/Home';
import { Seo } from '~/ui/util-components/Seo';
import { getSEOTag } from './api/app-configs';
import { useTranslation } from "next-i18next";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('home', locale),
    serverSideTranslations(locale ?? 'en', ['common', 'home', 'how_it_work', 'questionnaire']),
  ]);
  return {
    props: {
      seoTag,
      ...translation,
    },
    revalidate: 120,
  };
};

const HomePageHp2 = ({ seoTag }: { seoTag?: Meta }) => {
  const { title, description, keywords, image } = seoTag || {};
  const { t } = useTranslation('home');

  return (
    <>
      <Seo title={title} description={description} keywords={keywords} imageFeature={image}></Seo>
      <HomeTemplate title={t("hp2pageTitle")} />
    </>
  );
};

export default HomePageHp2;
