import { FC, memo } from 'react';

import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import { SectionV2Wrapper } from './style';

interface IProps {
  infoData: { [key: string]: any };
}

const HomeSectionV2: FC<IProps> = memo((props) => {
  const { infoData } = props;

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.dest_list?.['佛山']} itemWidth="33.33333%" />
    </SectionV2Wrapper>
  );
});

export default HomeSectionV2;
