import { FC, ReactNode, memo, useRef, useEffect } from 'react';

import { IndicatorWrapper } from './style';

interface IProps {
  children: ReactNode;
  selectIndex: number;
}

const Indicator: FC<IProps> = memo((props) => {
  const { selectIndex = 0, children } = props;

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1.获取selectIndex对应的item
    const selectItemEl = contentRef.current?.children[selectIndex];
    if (selectItemEl) {
      const itemLeft = (selectItemEl as HTMLElement).offsetLeft;
      const itemWidth = selectItemEl.clientWidth;

      // 2.content的宽度
      const contentWidth = contentRef.current?.clientWidth;
      const contentScroll = contentRef.current?.scrollWidth;

      // 3.获取selectIndex要滚动的距离
      let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;

      // 4.特殊情况的处理
      if (distance < 0) distance = 0; // 左边的特殊情况处理
      const totalDistance = contentScroll - contentWidth;
      if (distance > totalDistance) distance = totalDistance; // 右边的特殊情况处理

      // 5.改变位置
      contentRef.current.style.transform = `translate(${-distance}px)`;
    }
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {children}
      </div>
    </IndicatorWrapper>
  );
});

export default Indicator;
