import { FC, memo } from 'react';

import SectionHeader from '@/components/section-header';
import ScrollView from '@/base-ui/scroll-view';
import LongForItem from '@/components/longfor-item';
import { HomeLonforWrapper } from './style';

interface IProps {
  infoData: { [key: string]: any };
}

const HomeLonfor: FC<IProps> = memo((props) => {
  const { infoData } = props;

  return (
    <HomeLonforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item: any) => {
            return <LongForItem key={item.city} itemData={item} />;
          })}
        </ScrollView>
      </div>
    </HomeLonforWrapper>
  );
});

export default HomeLonfor;
