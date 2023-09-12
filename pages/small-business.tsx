import { BusinessTypesTemplate } from '@/ui/templates/business-types/BusinessTypesTemplate';
import { SmallBusiness } from '@/ui/templates/business-types/SmallBusiness';
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
  const title = t('smallService.title');
  const description = t('smallService.description');
  const tags = t('smallService.tags');
  const thumbnail = t('smallService.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <BusinessTypesTemplate>
        <SmallBusiness />
      </BusinessTypesTemplate>
    </>
  );
};

export default index;
