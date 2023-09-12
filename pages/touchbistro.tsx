import { EquipmentsTemplate } from '@/ui/templates/equipments/EquipmentsTemplate';
import { TouchBistro } from '@/ui/templates/equipments/TouchBistro';
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
  const title = t('touchbistro.title');
  const description = t('touchbistro.description');
  const tags = t('touchbistro.tags');
  const thumbnail = t('touchbistro.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <EquipmentsTemplate>
        <TouchBistro />
      </EquipmentsTemplate>
    </>
  );
};

export default index;
