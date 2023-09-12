import { EquipmentsTemplate } from '@/ui/templates/equipments/EquipmentsTemplate';
import { Micros } from '@/ui/templates/equipments/Micros';
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
  const title = t('simphony.title');
  const description = t('simphony.description');
  const tags = t('simphony.tags');
  const thumbnail = t('simphony.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <EquipmentsTemplate>
        <Micros />
      </EquipmentsTemplate>
    </>
  );
};

export default index;
