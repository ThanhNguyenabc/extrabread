import { EquipmentsTemplate } from '@/ui/templates/equipments/EquipmentsTemplate';
import { Toast } from '@/ui/templates/equipments/Toast';
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
  const title = t('toast.title');
  const description = t('toast.description');
  const tags = t('toast.tags');
  const thumbnail = t('toast.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <EquipmentsTemplate>
        <Toast />
      </EquipmentsTemplate>
    </>
  );
};

export default index;
