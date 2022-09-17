import { FC, memo } from 'react';

import IconSearchBar from '@/assets/svg/icon-search-bar';
import { CenterWrapper } from './styles';

const HeaderCenter: FC = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
