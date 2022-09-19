import { FC, memo, useState, useCallback } from 'react';

import SectionHeader from '@/components/section-header';
import SectionTabs from '@/components/section-tabs';
import SectionRooms from '@/components/section-rooms';
import SectionFooter from '@/components/section-footer';
import { SectionV2Wrapper } from './style';

interface IProps {
  infoData: { [key: string]: any };
}

const HomeSectionV2: FC<IProps> = memo((props) => {
  const { infoData } = props;

  /** 获取初始展示城市的名字 */
  const initalName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initalName);
  const tabNames = infoData.dest_address?.map((item: { [key: string]: any }) => item.name);

  /** 选中滑动的名字 */
  const tabClickHandle = useCallback((name: string) => {
    setName(name);
  }, []);

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33333%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

export default HomeSectionV2;
