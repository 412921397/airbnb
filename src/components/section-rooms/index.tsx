import { FC, memo } from 'react';

import RoomItem from '../room-item';
import { RoomsWrapper } from './style';

interface IProps {
  roomList: any[];
  itemWidth: string;
}

const SectionRooms: FC<IProps> = memo((props) => {
  const { roomList = [], itemWidth } = props;

  return (
    <RoomsWrapper>
      {roomList?.slice(0, 8)?.map((item) => {
        return <RoomItem key={item.id} itemData={item} itemWidth={itemWidth} />;
      })}
    </RoomsWrapper>
  );
});

export default SectionRooms;
