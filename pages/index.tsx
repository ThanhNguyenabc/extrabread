import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { HomeTemplate } from '~/ui/templates/home/Home';
import { Seo } from '~/ui/util-components/Seo';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const HomePage = () => {
  const { t } = useTranslation('common');
  const title = t('home.title');
  const description = t('home.description');
  const tags = t('home.tags');
  const thumbnail = t('home.thumbnail');
  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail}>
        <meta name="msvalidate.01" content="3C6845B8D23659F8E98DDA4C3166E803" />
      </Seo>
      <HomeTemplate />
    </>
  );
};

export default HomePage;
