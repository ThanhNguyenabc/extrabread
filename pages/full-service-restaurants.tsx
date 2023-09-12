import { BusinessTypesTemplate } from '@/ui/templates/business-types/BusinessTypesTemplate';
import { FullServiceRestaurants } from '@/ui/templates/business-types/FullServiceRestaurants';
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
  const title = t('fullService.title');
  const description = t('fullService.description');
  const tags = t('fullService.tags');
  const thumbnail = t('fullService.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <BusinessTypesTemplate>
        <FullServiceRestaurants />
      </BusinessTypesTemplate>
    </>
  );
};

export default index;
