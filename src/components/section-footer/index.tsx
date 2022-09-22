import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import IconMoreArrow from '@/assets/svg/icon-more-arrow';
import { FooterWrapper } from './style';

interface IProps {
  name: string;
}

const SectionFooter: FC<IProps> = memo((props) => {
  const { name } = props;

  let showMessage = '查看全部';
  if (name) showMessage = `显示更多${name}房源`;

  const navigate = useNavigate();
  const moreClickHandle = () => {
    navigate('/entire');
  };

  return (
    <FooterWrapper color={name ? '#00848A' : '#000'}>
      <div className="info">
        <span className="text" onClick={moreClickHandle}>
          {showMessage}
        </span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  );
});

export default SectionFooter;
