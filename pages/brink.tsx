import { Brinkpos } from '@/ui/templates/equipments/Brinkpos';
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
  const title = t('brink.title');
  const description = t('brink.description');
  const tags = t('brink.tags');
  const thumbnail = t('brink.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <EquipmentsTemplate>
        <Brinkpos />
      </EquipmentsTemplate>
    </>
  );
};

export default index;
