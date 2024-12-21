import { CategoryType } from '@/models/bestpos/category_type';
import { Product } from '@/models/bestpos/product.model';
import { useTranslation } from 'next-i18next';
import React from 'react';
import Box from '../ui/bestpos/Box';
import Loading from '../ui/loading/Loading';
import POSCard from './pos_card/POSCard';
import { Priority, RecommendColorConfig } from './pos_card/POSCardTypes';

const ProductList = ({ type, data }: { type: string; data: Array<Product> }) => {
  const { t } = useTranslation('pos_systems');

  const renderItems = () => {
    const items: Array<React.ReactElement> = [];
    if (data)
      data.forEach((item, index) => {
        if (index < 3) {
          const priority =
            index == 0 ? Priority.first : index == 1 ? Priority.second : Priority.third;

          const customClassName = `${RecommendColorConfig[priority].borderColor}`;

          items.push(
            <POSCard
              key={`card-item-${index}`}
              data={item}
              classname={customClassName}
              priority={priority}
            />,
          );
          if (index == 2 && type == CategoryType.popular) {
            items.push(
              <div className="relative w-full h-[32px]" key={`divider-${index}`}>
                <div className="absolute mx-auto left-0 right-0 bg-neutral-100 px-4 py-1 border-neutral-300 border-2 rounded-lg w-fit">
                  <p className="txt-sm-bold md:text-base ">{t('other_recommend_pos')}</p>
                </div>
                <span className="divider h-[2px]" />
              </div>,
            );
          }
        } else {
          items.push(<POSCard key={`card-item-${index}`} data={item} />);
        }
      });
    return items;
  };

  return (
    <>
      <Box className="flex flex-1 container-content gap-6 items-center min-h-[300px] mb-10">
        {!data && <Loading />}
        {data && renderItems()}
      </Box>
    </>
  );
};
export default ProductList;
