import { FC, memo, useState } from 'react';

import filterData from '@/assets/data/filter_data.json';
import { FilterWrapper } from './style';
import classNames from 'classnames';

const EntireFilter: FC = memo(() => {
  const [selectItems, setSelectItems] = useState<string[]>([]);

  const itemClickHandle = (item: string) => {
    const newItems = [...selectItems];
    if (selectItems.includes(item)) {
      // 再次点击去除当前的item
      const itemIndex = newItems.findIndex((filterItem) => filterItem === item);
      newItems.splice(itemIndex, 1);
    } else {
      newItems.push(item);
    }

    setSelectItems(newItems);
  };

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item: string) => {
          return (
            <div
              key={item}
              className={classNames('item', { active: selectItems.includes(item) })}
              onClick={() => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
