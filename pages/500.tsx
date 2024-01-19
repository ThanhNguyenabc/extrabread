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

const Page500 = () => {
  return (
    <div className="h-full font-semibold items-center">
      <p>Something was wrong</p>
    </div>
  );
};

export default Page500;
