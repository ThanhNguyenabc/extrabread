import { ReactElement, useEffect, useState } from 'react';

interface DrawerState {
  child?: ReactElement | null;
  isOpen: boolean;
}

const DrawerListeners: Array<(state: DrawerState) => void> = [];

const useDrawer = () => {
  const [state, setModal] = useState<DrawerState>();

  useEffect(() => {
    DrawerListeners.push(setModal);

    return () => {
      const index = DrawerListeners.indexOf(setModal);
      if (index > -1) {
        DrawerListeners.splice(index, 1);
      }
    };
  }, [state]);

  const openDrawer = (component: ReactElement) => {
    DrawerListeners?.forEach(item => {
      item({
        child: component,
        isOpen: true,
      });
    });
  };

  const closeDrawer = () => {
    DrawerListeners?.forEach(item => {
      item({
        isOpen: false,
      });
    });
  };

  return {
    ...state,
    closeDrawer,
    openDrawer,
  };
};

export default useDrawer;
