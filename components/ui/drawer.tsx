import { useDevice } from '@/hooks/useDetectMobile';
import useDrawer from '@/hooks/useDrawer';
import { Drawer } from 'antd';
import React from 'react';

const BDrawer = () => {
  const { isLaptop, isTablet } = useDevice();
  const { isOpen, child, closeDrawer } = useDrawer();

  console.log('drawer');
  console.log(child);
  console.log('asdadad', isOpen);
  return (
    <Drawer
      open={isOpen}
      onClose={closeDrawer}
      closeIcon={null}
      title={null}
      contentWrapperStyle={{
        width: (isTablet && 600) || (isLaptop && 768) || '100%',
      }}
      style={{
        zIndex: 1000,
      }}
    >
      {child}
    </Drawer>
  );
};

export default BDrawer;
