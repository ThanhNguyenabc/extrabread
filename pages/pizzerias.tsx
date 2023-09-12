import { BusinessTypesTemplate } from '@/ui/templates/business-types/BusinessTypesTemplate';
import { Pizzerias } from '@/ui/templates/business-types/Pizzerias';
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
  const title = t('pizzeriase.title');
  const description = t('pizzeriase.description');
  const tags = t('pizzeriase.tags');
  const thumbnail = t('pizzeriase.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <BusinessTypesTemplate>
        <Pizzerias />
      </BusinessTypesTemplate>
    </>
  );
};

export default index;
