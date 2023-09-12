import { hookstate } from '@hookstate/core';

export const globalState = hookstate<{ lang: Language; openMenu?: boolean }>({
  lang: 'en',
  openMenu: false,
});
