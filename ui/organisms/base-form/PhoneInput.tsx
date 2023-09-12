import { useHookstate } from '@hookstate/core';
import { Input, InputProps } from 'antd';
import { globalState } from '~/hooks/useLanguage';
import { ESIcon, USIcon } from '~/ui/img-resource/ImageResources';

export const PhoneInput = (props: InputProps) => {
  const state = useHookstate(globalState);
  const flag = state.get().lang;

  return <Input {...props} prefix={flag === 'en' ? <USIcon /> : <ESIcon />} size="large" />;
};
