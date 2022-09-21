import { FC, memo, useRef, useState } from 'react';

import { Rating } from '@mui/material';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/lib/carousel/index.d';
import classNames from 'classnames';

import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import { ItemWrapper } from './style';

interface IProps {
  itemData: { [key: string]: any };
  itemWidth?: string;
  itemClick?: () => void;
}

const RoomItem: FC<IProps> = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props;

  const sliderRef = useRef<CarouselRef>(null);
  const [selectIndex, setSelectIndex] = useState(0);

  const itemClickHandle = () => {
    if (itemClick) itemClick();
  };

  const controlClickHandle = (isRight = true) => {
    // 上一个面板/下一个面板
    !isRight ? sliderRef.current?.prev() : sliderRef.current?.next();

    // 最新的索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    const length = itemData.picture_urls.length;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;
    setSelectIndex(newIndex);
  };

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={() => controlClickHandle(false)}>
          <IconArrowLeft width={30} height={30} />
        </div>
        <div className="btn right" onClick={() => controlClickHandle()}>
          <IconArrowRight width={30} height={30} />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item: string, index: number) => {
            return (
              <div className="item" key={item}>
                <span className={classNames('dot', { active: selectIndex === index })}></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item: string) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {itemData.picture_urls ? sliderElement : pictureElement}
        <div className="desc">{itemData.verify_info.messages.join(' · ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>

        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: '12px', color: '#00848A', marginRight: '-1px' }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && <span className="extra">·{itemData.bottom_info?.content}</span>}
        </div>
      </div>
    </ItemWrapper>
  );
});

export default RoomItem;
