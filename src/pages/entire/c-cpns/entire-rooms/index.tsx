import { FC, memo, useCallback } from 'react';

import { shallowEqual, useSelector } from '@/store';
import { RoomWrapper } from './style';
import RoomItem from '@/components/room-item';
import { useNavigate } from 'react-router-dom';

const EntireRooms: FC = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }),
    shallowEqual
  );

  const navigate = useNavigate();
  const itemClickHandle = useCallback(() => {
    navigate('/detail');
  }, [navigate]);

  return (
    <RoomWrapper>
      {totalCount > 0 && <h2 className="title">{totalCount}多处住所</h2>}
      <div className="list">
        {roomList.map((item) => {
          return (
            <RoomItem key={item._id} itemData={item} itemWidth="20%" itemClick={itemClickHandle} />
          );
        })}
      </div>

      {isLoading && <div className="cover"></div>}
    </RoomWrapper>
  );
});

export default EntireRooms;
