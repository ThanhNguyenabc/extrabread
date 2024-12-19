import { Badge } from '@/components/ui/badge';
import useQuestionnaire from '@/hooks/useQuestionnaire';

import { IcChevronRight, NotificationIcon } from '~/ui/img-resource/ExIcon';

export const Alert = () => {
  const { openForm } = useQuestionnaire();

  return (
    <div className="flex flex-col md:flex-row bg-neutral-900 justify-center items-center p-3 gap-3 text-neutral-200 text-sm-semibold">
      <span>
        <NotificationIcon />
      </span>
      <span className=" text-center">
        Find the right POS System for your business type with our POS Comparison Tool
      </span>

      <button onClick={openForm}>
        <Badge className="bg-neutral-900 text-sm border-2 border-neutral-300 font-normal rounded-lg px-3">
          Opens up the following form
          <IcChevronRight />
        </Badge>
      </button>
    </div>
  );
};
