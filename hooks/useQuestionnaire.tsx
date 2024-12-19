import QuestionnaireForm from '@/components/elements/questionnaireV2/QuestionnaireForm';
import React from 'react';
import useDrawer from './useDrawer';

const useQuestionnaire = () => {
  const { openDrawer, closeDrawer } = useDrawer();

  const questionForm = <QuestionnaireForm onClose={closeDrawer} />;

  return {
    openForm: () => {
      openDrawer(questionForm);
    },
  };
};

export default useQuestionnaire;
