import { USIcon, ESIcon } from '@/ui/img-resource/ExIcon';
import { useHookstate } from '@hookstate/core';
import { Input, InputProps } from 'antd';
import { globalState } from '~/hooks/useLanguage';


export const PhoneInput = (props: InputProps) => {
  const state = useHookstate(globalState);
  const flag = state.get().lang;

  return <Input {...props} prefix={flag === 'en' ? <USIcon /> : <ESIcon />} size="large" />;
};
