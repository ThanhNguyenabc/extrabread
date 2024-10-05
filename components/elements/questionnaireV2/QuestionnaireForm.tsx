import Box from '@/components/ui/bestpos/Box';
import { Button } from '@/components/ui/button';
import { BUSINESS_MENU, YesNoQuestion } from '@/constants';
import useQuestionnaireStore from '@/hooks/questionnaire_store';
import { IcClose } from '@/ui/img-resource/ExIcon';
import { useRouter } from 'next/router';
import React from 'react';
import BusinessQuestion from './BusinessQuestion';
import DiscountProgram from './DiscountProgram';
import HandHeldQuestion, { HandHeldData } from './HandheldQuestion';
import SaleSystemQuestion from './SaleSystemQuestion';
import StationQuestion, { StationData } from './StationQuestion';
import { RouteConfig } from '@/constants/routes';

const QuestionnaireForm = ({onClose}:{onClose:() => void}) => {
  const router = useRouter();

  const questionnaireStore = useQuestionnaireStore(state => state);

  const goToSuggestPos = () => {
    router.replace(
      {
        pathname: RouteConfig.SuggestPos,
        query: {
          access: true,
          business: BUSINESS_MENU[questionnaireStore.businessId].type,
          salesystem: YesNoQuestion[questionnaireStore.saleSystemIndex],
          discount: questionnaireStore.discountIndex == 0 ? 'yes' : 'no',
          stations: StationData[questionnaireStore.numberStationIndex].content,
          handheld:
            questionnaireStore.handHeldIndex != undefined
              ? HandHeldData[questionnaireStore.handHeldIndex].quantity
              : '_',
        },
      },
      RouteConfig.SuggestPos,
    );
  };

  return (
    <Box className="flex flex-col gap-6 py-8 md:py-10 md:gap-10">
      <Button variant={"outline"}  size={'icon'} className='rounded-[20px]' onClick ={onClose}>
        <IcClose   />
      </Button>
      <p className="txt-md-bold p-4 bg-accent  rounded-2xl -mt-4">
        Our experts at BestPOS will recommend the Best POS systems for your business needs.
      </p>
      <BusinessQuestion />
      <SaleSystemQuestion />
      <StationQuestion />
      <HandHeldQuestion />
      <DiscountProgram />
      <Button className="w-[200px] self-center" size={"responsive"} onClick={goToSuggestPos}>{`Get Results`}</Button>
    </Box>
  );
};

export default QuestionnaireForm;
