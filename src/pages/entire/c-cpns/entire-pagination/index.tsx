import { FC, memo } from 'react';

import Pagination from '@mui/material/Pagination';

import { useSelector, useDispatch, shallowEqual } from '@/store';
import { PaginationWrapper } from './style';
import { fetchRoomListAction } from '@/store/feautures/entire';

const EntirePagination: FC = memo(() => {
  const { totalCount, currentPage, roomList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList
    }),
    shallowEqual
  );

  const totalPage = Math.ceil(totalCount / 20); // 有余数整数位自动+1
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;

  const dispatch = useDispatch();

  const pageChangeHandle = (_event: any, pageCount: number) => {
    // 回到顶部
    window.scrollTo(0, 0);
    // 更新最新的页码: redux => currentPage
    dispatch(fetchRoomListAction(pageCount - 1));
  };

  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default EntirePagination;
