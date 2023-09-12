import { EquipmentsTemplate } from '@/ui/templates/equipments/EquipmentsTemplate';
import { Union } from '@/ui/templates/equipments/Union';
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
  const title = t('union.title');
  const description = t('union.description');
  const tags = t('union.tags');
  const thumbnail = t('union.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <EquipmentsTemplate>
        <Union />
      </EquipmentsTemplate>
    </>
  );
};

export default index;
