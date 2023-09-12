import { EquipmentsTemplate } from '@/ui/templates/equipments/EquipmentsTemplate';
import { RPower } from '@/ui/templates/equipments/RPower';
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
  const title = t('rpower.title');
  const description = t('rpower.description');
  const tags = t('rpower.tags');
  const thumbnail = t('rpower.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <EquipmentsTemplate>
        <RPower />
      </EquipmentsTemplate>
    </>
  );
};

export default index;
