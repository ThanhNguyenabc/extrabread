import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next/types';
import { TermsOfService } from '~/ui/templates/secondary/TermsOfService';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const TermOfServicePage = () => {
  return <TermsOfService />;
};

export default TermOfServicePage;
