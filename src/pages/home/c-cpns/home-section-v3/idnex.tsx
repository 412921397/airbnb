import ScrollView from '@/base-ui/scroll-view';
import RoomItem from '@/components/room-item';
import SectionFooter from '@/components/section-footer';
import SectionHeader from '@/components/section-header';
import { FC, memo } from 'react';

import { SectionV3Wrapper } from './style';

interface IProps {
  infoData: { [key: string]: any };
}

const HomeSectionV3: FC<IProps> = memo((props) => {
  const { infoData } = props;

  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="room-list">
        <ScrollView>
          {infoData.list.map((item: any) => {
            return <RoomItem key={item.id} itemData={item} itemWidth="20%" />;
          })}
        </ScrollView>
      </div>
      <SectionFooter name="plus" />
    </SectionV3Wrapper>
  );
});

export default HomeSectionV3;
