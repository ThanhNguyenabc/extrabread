import { EquipmentsTemplate } from '@/ui/templates/equipments/EquipmentsTemplate';
import { Ovvi } from '@/ui/templates/equipments/Ovvi';
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
  const title = t('ovvi.title');
  const description = t('ovvi.description');
  const tags = t('ovvi.tags');
  const thumbnail = t('ovvi.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <EquipmentsTemplate>
        <Ovvi />
      </EquipmentsTemplate>
    </>
  );
};

export default index;
