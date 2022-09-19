import { FC, ReactNode, memo, useState, useRef, useEffect } from 'react';

import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import { ViewWrapper } from './style';

interface IProps {
  children: ReactNode;
  isShowShadow?: boolean;
}

const ScrollView: FC<IProps> = memo((props) => {
  const { isShowShadow = true } = props;

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef<number>(0); // 需要滑动的距离，(存储状态值,不重复渲染render函数，对组件可以做到一定的性能优化)
  const scrollContentRef = useRef<HTMLDivElement>(null);

  /** 组件渲染完毕, 判断是否显示右侧的按钮 */
  useEffect(() => {
    const scrollWidth = scrollContentRef.current?.scrollWidth; // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current?.clientWidth; // 本身占据的宽度
    if (scrollWidth && clientWidth) {
      const totalDistance = scrollWidth - clientWidth; // 需要滚动的距离
      totalDistanceRef.current = totalDistance;
      setShowRight(totalDistance > 0);
    }
  }, [props.children]);

  /** 点击滚动item */
  const controlClickHandle = (isRight: boolean) => {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1; // 左右偏移的元素
    const newEl = scrollContentRef.current?.children[newIndex] as HTMLDivElement;
    const newOffsetLeft = newEl?.offsetLeft;
    if (scrollContentRef.current) {
      scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    }
    setPosIndex(newIndex);
    // 是否继续显示左右侧的按钮
    setShowRight(totalDistanceRef.current! > newOffsetLeft);
    setShowLeft(newOffsetLeft > 0);
  };

  return (
    <ViewWrapper>
      {showLeft && !isShowShadow && <div className="leftblur"></div>}
      {showLeft && (
        <div className="control left" onClick={() => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && !isShowShadow && <div className="rightblur"></div>}
      {showRight && (
        <div className="control right" onClick={() => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

export default ScrollView;
