import { BarNightClubs } from '@/ui/templates/business-types/BarNightClubs';
import { BusinessTypesTemplate } from '@/ui/templates/business-types/BusinessTypesTemplate';
import { Seo } from '@/ui/util-components/Seo';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['business'])),
  },
});

const index = () => {
  const { t } = useTranslation('business');
  const title = t('barsAndNight.title');
  const description = t('barsAndNight.description');
  const tags = t('barsAndNight.tags');
  const thumbnail = t('barsAndNight.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <BusinessTypesTemplate>
        <BarNightClubs />
      </BusinessTypesTemplate>
    </>
  );
};

export default index;
