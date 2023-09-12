import { hookstate, useHookstate } from '@hookstate/core';
import { devtools } from '@hookstate/devtools';

interface SettingsStateType {
  activeTabKey: 'pool' | 'conversion' | 'currency_cap';
}

const settingsState = hookstate<SettingsStateType>(
  {
    activeTabKey: 'conversion',
  },
  devtools({ key: 'settings' }),
);

export function useSettingsState() {
  const state = useHookstate(settingsState);

  return {
    get activeTabKey() {
      return state.activeTabKey.get();
    },
    setActiveTabKey(key: SettingsStateType['activeTabKey']) {
      state.activeTabKey.set(key);
    },
  };
}
