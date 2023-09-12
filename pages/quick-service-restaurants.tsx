import { BusinessTypesTemplate } from '@/ui/templates/business-types/BusinessTypesTemplate';
import { QuickService } from '@/ui/templates/business-types/QuickService';
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
  const title = t('quickService.title');
  const description = t('quickService.description');
  const tags = t('quickService.tags');
  const thumbnail = t('quickService.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <BusinessTypesTemplate>
        <QuickService />
      </BusinessTypesTemplate>
    </>
  );
};

export default index;
