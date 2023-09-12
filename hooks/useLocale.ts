import { useRouter } from 'next/router';

const useLocale = () => {
  const { locale } = useRouter();

  return {
    isEng: locale?.startsWith('en'),
    isEs: locale?.startsWith('es'),
  };
};

export default useLocale;
