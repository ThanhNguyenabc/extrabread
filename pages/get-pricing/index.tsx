import { Seo } from '@/ui/util-components/Seo';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetPricingTemplate } from '~/ui/templates/get-pricing/GetPricing';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const index = () => {
  const { t } = useTranslation('common');
  const title = t('pricing.title');
  const description = t('pricing.description');
  const tags = t('pricing.tags');
  const thumbnail = t('pricing.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <GetPricingTemplate />
    </>
  );
};

export default index;
