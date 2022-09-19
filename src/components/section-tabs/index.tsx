import { FC, memo, useState } from 'react';

import ScrollView from '@/base-ui/scroll-view';
import { TabsWrapper } from './style';
import classNames from 'classnames';

interface IProps {
  tabNames: string[];
  tabClick: (name: string) => void;
}

const SectionTabs: FC<IProps> = memo((props) => {
  const { tabNames, tabClick } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemClickHandle = (index: number, name: string) => {
    setCurrentIndex(index);
    tabClick(name);
  };

  return (
    <TabsWrapper>
      <ScrollView isShowShadow={false}>
        {tabNames.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames('item', { active: index === currentIndex })}
              onClick={() => itemClickHandle(index, item)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

export default SectionTabs;
