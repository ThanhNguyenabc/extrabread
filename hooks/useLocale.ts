import { Locale } from '@/models/app_config.model';
import { useRouter } from 'next/router';

const useLocale = () => {
  const { locale } = useRouter();

  return {
    isEng: locale?.startsWith('en'),
    isEs: locale?.startsWith('es'),
    locale: (locale as Locale) || Locale.en,
  };
};

export default useLocale;
