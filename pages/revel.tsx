import { EquipmentsTemplate } from '@/ui/templates/equipments/EquipmentsTemplate';
import { Revel } from '@/ui/templates/equipments/Revel';
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
  const title = t('revel.title');
  const description = t('revel.description');
  const tags = t('revel.tags');
  const thumbnail = t('revel.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <EquipmentsTemplate>
        <Revel />
      </EquipmentsTemplate>
    </>
  );
};

export default index;
