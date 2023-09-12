import { CloverDuo } from '@/ui/templates/equipments/CloverDuo';
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
  const title = t('cloverDuo.title');
  const description = t('cloverDuo.description');
  const tags = t('cloverDuo.tags');
  const thumbnail = t('cloverDuo.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <EquipmentsTemplate>
        <CloverDuo />
      </EquipmentsTemplate>
    </>
  );
};

export default index;
