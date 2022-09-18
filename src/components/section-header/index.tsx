import { FC, memo } from 'react';
import { HeaderWrapper } from './style';

interface IProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: FC<IProps> = memo((props) => {
  const { title, subtitle } = props;

  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </HeaderWrapper>
  );
});

export default SectionHeader;
