import { FC, memo } from 'react';

import HeaderCenter from './c-cpns/header-center';
import HeaderLeft from './c-cpns/header-left';
import HeaderRight from './c-cpns/header-right';
import { AppHeaderWrapper } from './style';

const AppHeader: FC = memo(() => {
  return (
    <AppHeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </AppHeaderWrapper>
  );
});

export default AppHeader;
