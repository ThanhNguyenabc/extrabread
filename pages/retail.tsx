import { BusinessTypesTemplate } from '@/ui/templates/business-types/BusinessTypesTemplate';
import { RetailBusinesses } from '@/ui/templates/business-types/RetailBusinesses';
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
  const title = t('retail.title');
  const description = t('retail.description');
  const tags = t('retail.tags');
  const thumbnail = t('retail.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <BusinessTypesTemplate>
        <RetailBusinesses />
      </BusinessTypesTemplate>
    </>
  );
};

export default index;
