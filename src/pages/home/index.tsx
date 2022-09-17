import { FC, memo } from 'react';

import HomeBanner from './c-cpns/home-banner';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import { HomeWrapper } from './style';

const Home: FC = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader />
          <SectionRooms />
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
