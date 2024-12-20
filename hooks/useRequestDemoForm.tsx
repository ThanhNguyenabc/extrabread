import RequestDemoPOS from '@/components/elements/request_demo_pos/RequestDemoPOS';
import React from 'react';
import useDrawer from './useDrawer';

const useRequestDemoForm = () => {
  const { openDrawer, closeDrawer } = useDrawer();

  const questionForm = <RequestDemoPOS onClose={closeDrawer} />;

  return {
    openForm: () => {
      openDrawer(questionForm);
    },
  };
};

export default useRequestDemoForm;
