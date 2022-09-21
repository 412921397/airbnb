import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import IconLogo from '@/assets/svg/icon_logo';
import { LeftWrapper } from './style';

const HeaderLeft: FC = memo(() => {
  const navigate = useNavigate();

  const clickHandle = () => {
    navigate('/home');
    window.scroll(0, 0);
  };
  return (
    <LeftWrapper>
      <div className="logo" onClick={clickHandle}>
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
