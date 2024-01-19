import { SOLUTIONS_MENU } from '@/constants';
import { Meta } from '@/models/app_config.model';
import { SolutionsTemplate } from '@/ui/templates/solutions/SolutionsTemplate';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Seo } from '~/ui/util-components/Seo';
import { getSEOTag } from '../api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('home', locale),
    serverSideTranslations(locale ?? 'en', ['common', 'solutions']),
  ]);
  return {
    props: {
      seoTag,
      ...translation,
    },
    revalidate: 120,
  };
};

const slugs = ['credit-card', 'mobile-card', 'online-processing'];

export const getStaticPaths = () => {
  console.log('--------server side-----------');
  console.log(
    slugs.flatMap(item => {
      return ['en', 'es'].map(locale => ({
        params: {
          slug: item,
        },
        locale,
      }));
    }),
  );
  return {
    paths: SOLUTIONS_MENU.flatMap(item => {
      return ['en', 'es'].map(locale => ({
        params: {
          slug: item.href,
        },
        locale,
      }));
    }),
    fallback: true,
  };
};

const SolutionPage = ({ seoTag }: { seoTag?: Meta }) => {
  const { title, description, keywords, image } = seoTag || {};

  return (
    <>
      <Seo title={title} description={description} keywords={keywords} imageFeature={image}></Seo>
      <SolutionsTemplate />
    </>
  );
};

export default SolutionPage;
