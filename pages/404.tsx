import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [translation] = await Promise.all([serverSideTranslations(locale ?? 'en', ['common'])]);
  return {
    props: {
      ...translation,
    },
  };
};

const Page404 = () => {
  return (
    <div className="h-full font-semibold items-center">
      <p>404 Not Found</p>
    </div>
  );
};

export default Page404;
