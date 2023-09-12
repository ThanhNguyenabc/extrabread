import { EquipmentsTemplate } from '@/ui/templates/equipments/EquipmentsTemplate';
import { Lightspeed } from '@/ui/templates/equipments/Lightspeed';
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
  const title = t('lightspeed.title');
  const description = t('lightspeed.description');
  const tags = t('lightspeed.tags');
  const thumbnail = t('lightspeed.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <EquipmentsTemplate>
        <Lightspeed />
      </EquipmentsTemplate>
    </>
  );
};

export default index;
