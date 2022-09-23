import { FC, memo, useState } from 'react';
import classNames from 'classnames';

import { TabsWrapper } from './style';

interface IProps {
  titles: string[];
  tabClick: (index: number) => void;
}

const SearchTabs: FC<IProps> = memo((props) => {
  const { titles, tabClick } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemClickHandle = (index: number) => {
    setCurrentIndex(index);
    if (tabClick) tabClick(index);
  };

  return (
    <TabsWrapper>
      {titles.map((item, index) => {
        return (
          <div
            key={item}
            className={classNames('item', { active: currentIndex === index })}
            onClick={() => itemClickHandle(index)}
          >
            <span className="text">{item}</span>
            <span className="bottom"></span>
          </div>
        );
      })}
    </TabsWrapper>
  );
});

export default SearchTabs;
