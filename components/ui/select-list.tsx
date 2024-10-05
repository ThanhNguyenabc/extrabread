import React, { ReactElement, memo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface SelectedList<T extends object | string> {
  data: Array<T>;
  selectIndex?: number;
  renderItem: (item: T, index: number, isSelected?: boolean) => ReactElement;
  onItemSelected?: (indexes: Array<number>) => void;
  className?: string;
  selectedClassName?: string;
  isMultipleSelect?: boolean;
}

export const ItemList = memo(
  ({
    child,
    isSelect,
    selectedStyle = 'border-secondary',
    onClick,
  }: {
    child: ReactElement;
    isSelect: boolean;
    selectedStyle: string;
    onClick: () => void;
  }) => {
    const baseItemStyle =
      'w-full border-2 rounded-lg cursor-pointer hover:border-secondary hover:bg-blue-light border-neutral-300';

    return React.cloneElement(child, {
      className: twMerge(
        `${baseItemStyle}`,
        isSelect && `bg-blue-light ${selectedStyle}`,
        child.props['className'],
      ),
      onClick: onClick,
    });
  },
);

ItemList.displayName = 'ItemList';

const SelectedList = <T extends object | string>({
  data,
  onItemSelected,
  renderItem,
  className = '',
  selectIndex = -1,
  isMultipleSelect = false,
  selectedClassName = 'border-secondary',
}: SelectedList<T>) => {
  const [selectedIndexes, setSelectedIndexes] = useState<{
    [key: number]: boolean;
  }>({ [selectIndex]: true });

  const onItemClick = (index: number) => {
    let data: { [key: number]: boolean } = {};

    if (isMultipleSelect) {
      data = { ...selectedIndexes };
    }

    if (data[index]) {
      delete data[index];
    } else {
      data[index] = true;
    }

    setSelectedIndexes(data);
    onItemSelected && onItemSelected(Object.keys(data).map(item => Number(item)));
  };

  const renderItems = () =>
    data.map((item: T, index) => {
      const isSelect = selectedIndexes[index] ? true : false;
      const Item = renderItem(item, index, isSelect);
      return (
        <ItemList
          key={`item-list-${index}`}
          isSelect={isSelect}
          selectedStyle={selectedClassName}
          child={Item}
          onClick={() => onItemClick(index)}
        />
      );
    });

  return <div className={twMerge(`grid grid-cols-1 gap-4`, className)}>{renderItems()}</div>;
};

export default SelectedList;
