import { FC, memo } from 'react';

// import { useSelector, shallowEqual } from '@/store';
import { HeaderWrapper } from './style';

interface IProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: FC<IProps> = memo((props) => {
  const { title, subtitle } = props;

  /** 获取当前顶部是否需要固定动画的数据状态 */
  // const { headerConfig } = useSelector(
  //   (state) => ({ headerConfig: state.main.headerConfig }),
  //   shallowEqual
  // );

  // const { isFixed, topAlpha } = headerConfig;

  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </HeaderWrapper>
  );
});

export default SectionHeader;
