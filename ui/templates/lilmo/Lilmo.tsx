import SafeHydrate from '@/ui/atoms/safe-hydrate';
import { WorkWithTheBest } from '@/ui/organisms/work-with-the-best/WorkWithTheBest';
import { GetPricingTemplate } from '../get-pricing/GetPricing';
import { HowItWorks } from '../home/components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { HowYaModal } from './components/how-ya-doin/HowYaModal';

export const Lilmo = () => {
  return (
    <GetPricingTemplate type="lilmo">
      <WorkWithTheBest />
      <HowItWorks />
      <Testimonials />
      <SafeHydrate>
        <HowYaModal />
      </SafeHydrate>
    </GetPricingTemplate>
  );
};
