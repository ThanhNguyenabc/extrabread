import { SolutionsTemplate } from '@/ui/templates/solutions/SolutionsTemplate';
import { Seo } from '~/ui/util-components/Seo';

const SolutionPage = () => {
  return (
    <>
      <Seo
        title="Breadme: 0% Processing Fees"
        description="Tired of paying outrageous merchant service fees and want to earn up to 100% of the revenue? Switch to Breadme today & accept credit cards without the cost."
        keywords="breadme, start slice, cash discount, cash discount program, capital, free capital, credit card processing, point of sale, pos, pos system, free pos, revel, clover, ovvi, clover flex, clover duo, aldelo, lightspeed, simphony, exatouch, light speed"
        imageFeature="/images/seo/seo-img-4.jpg"
      />
      <SolutionsTemplate />
    </>
  );
};

export default SolutionPage;
