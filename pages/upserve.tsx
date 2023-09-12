import { EquipmentsTemplate } from '@/ui/templates/equipments/EquipmentsTemplate';
import { Upserve } from '@/ui/templates/equipments/Upserve';
import { Seo } from '@/ui/util-components/Seo';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['equipment'])),
  },
});

const index = () => {
  const { t } = useTranslation('equipment');
  const title = t('upserve.title');
  const description = t('upserve.description');
  const tags = t('upserve.tags');
  const thumbnail = t('upserve.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <EquipmentsTemplate>
        <Upserve />
      </EquipmentsTemplate>
    </>
  );
};

export default index;
