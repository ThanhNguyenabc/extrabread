import { useTranslation } from 'next-i18next';
import React from 'react';

const FrequentlyQuestion = () => {
  const { t } = useTranslation('pos-detail');

  const questions = t('frequentlyQuestion.questions', { returnObjects: true }) as Array<{
    question: string;
    ans: string;
  }>;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
      <p className="col-span-1 txt-heading-xsmal md:txt-heading-small">
        {t('frequentlyQuestion.title')}
      </p>
      <div className="col-span-2 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {questions.map((item, index) => {
          return (
            <div
              key={`frequently-question-${index}`}
              className=" flex flex-col p-6 bg-neutral-100 gap-2 rounded-2xl"
            >
              <p className="txt-md-bold"> {item.question}</p>
              <p className=" text-neutral-700">{item.ans}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrequentlyQuestion;
