import { FC, memo, useEffect, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import IconClose from '@/assets/svg/icon-close';
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom';
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top';
import { PictureWrapper } from './style';
import Indicator from '../indicator';
import classNames from 'classnames';

interface IProps {
  pictureUrls: string[];
  closeClick: () => void;
}

const PictureBrowser: FC<IProps> = memo((props) => {
  const { pictureUrls, closeClick } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true);

  // 当图片浏览器展示出来时, 滚动的功能消失
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const closeBtnClickHandle = () => {
    if (closeClick) closeClick();
  };

  /** 切换图片 */
  const controlClickHandle = (isNext = true) => {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;

    setCurrentIndex(newIndex);
    setIsNext(isNext);
  };

  /** 点击图片进行跳转 */
  const bottomItemClickHandle = (index: number) => {
    setIsNext(index > currentIndex);
    setCurrentIndex(index);
  };

  return (
    <PictureWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={() => controlClickHandle(false)}>
            <IconArrowLeft width={77} height={77} />
          </div>
          <div className="btn right" onClick={() => controlClickHandle(true)}>
            <IconArrowRight width={77} height={77} />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition key={pictureUrls[currentIndex]} classNames="pic" timeout={200}>
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:
              </span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={() => setShowList(!showList)}>
              <span>{showList ? '隐藏' : '显示'}照片列表</span>
              {showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    key={item}
                    className={classNames('item', { active: currentIndex === index })}
                    onClick={() => bottomItemClickHandle(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </PictureWrapper>
  );
});

export default PictureBrowser;
