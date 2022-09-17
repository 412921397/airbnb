import { FC, memo } from 'react';

import IconLogo from '@/assets/svg/icon_logo';
import { LeftWrapper } from './style';

const HeaderLeft: FC = memo(() => {
  return (
    <LeftWrapper>
      <div className="logo">
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
