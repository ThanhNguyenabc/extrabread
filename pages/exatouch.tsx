import { EquipmentsTemplate } from '@/ui/templates/equipments/EquipmentsTemplate';
import { Exatouch } from '@/ui/templates/equipments/Exatouch';
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
  const title = t('exatouch.title');
  const description = t('exatouch.description');
  const tags = t('exatouch.tags');
  const thumbnail = t('exatouch.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <EquipmentsTemplate>
        <Exatouch />
      </EquipmentsTemplate>
    </>
  );
};

export default index;
