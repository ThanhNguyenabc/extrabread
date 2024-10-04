import { Locale } from '@/models/bestpos/app_configs';
import { useRouter } from 'next/router';

const useTrans = () => {
  const { locale, asPath } = useRouter();
  const lang = (locale as Locale) || Locale.en;

  return { locale: lang, asPath };
};

export default useTrans;
