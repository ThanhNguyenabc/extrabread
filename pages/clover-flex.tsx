import { CloverFlex } from '@/ui/templates/equipments/CloverFlex';
import { EquipmentsTemplate } from '@/ui/templates/equipments/EquipmentsTemplate';
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
  const title = t('cloverFlex.title');
  const description = t('cloverFlex.description');
  const tags = t('cloverFlex.tags');
  const thumbnail = t('cloverFlex.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <EquipmentsTemplate>
        <CloverFlex />
      </EquipmentsTemplate>
    </>
  );
};

export default index;
