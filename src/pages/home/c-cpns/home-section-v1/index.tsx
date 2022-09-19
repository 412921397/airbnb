import { FC, memo } from 'react';

import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionFooter from '@/components/section-footer';
import { SectionV1Wrapper } from './style';

interface IProps {
  infoData: { [key: string]: any };
}

const HomeSectionV1: FC<IProps> = memo((props) => {
  const { infoData } = props;

  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.list} itemWidth="25%" />
      <SectionFooter name={infoData.title} />
    </SectionV1Wrapper>
  );
});

export default HomeSectionV1;
