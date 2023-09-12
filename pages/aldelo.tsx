import { AldeloExpress } from '@/ui/templates/equipments/AldeloExpress';
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
  const title = t('aldelo.title');
  const description = t('aldelo.description');
  const tags = t('aldelo.tags');
  const thumbnail = t('aldelo.thumbnail');

  return (
    <>
      <Seo title={title} description={description} keywords={tags} imageFeature={thumbnail} />
      <EquipmentsTemplate>
        <AldeloExpress />
      </EquipmentsTemplate>
    </>
  );
};

export default index;
