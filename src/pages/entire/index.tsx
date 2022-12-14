import { useDispatch } from '@/store';
import { fetchRoomListAction } from '@/store/feautures/entire';
import { changeHeaderConfigAction } from '@/store/feautures/main';
import { FC, memo, useEffect } from 'react';

import EntireFilter from './c-cpns/entire-filter';
import EntirePagination from './c-cpns/entire-pagination';
import EntireRooms from './c-cpns/entire-rooms';
import { EntireWrapper } from './style';

const Entire: FC = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction(0));
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }));
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
