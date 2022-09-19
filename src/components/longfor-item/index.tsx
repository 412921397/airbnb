import { FC, memo } from 'react';

import { LonForWrapper } from './style';

interface IProps {
  itemData: { [key: string]: any };
}

const LongForItem: FC<IProps> = memo((props) => {
  const { itemData } = props;

  return (
    <LonForWrapper>
      <div className="inner">
        <div className="item-info">
          <img className="cover" src={itemData.picture_url} alt="" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{itemData.city}</div>
            <div className="price">均价 {itemData.price}</div>
          </div>
        </div>
      </div>
    </LonForWrapper>
  );
});

export default LongForItem;
