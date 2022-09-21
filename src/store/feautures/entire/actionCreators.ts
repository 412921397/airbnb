import { createAsyncThunk } from '@reduxjs/toolkit';

import { getEntireRoomList } from '@/services/modules/entire';
import {
  changeCurrentPageAction,
  changeIsLoadingAction,
  changeRoomlistAction,
  changeTotalCountAction
} from './entireSlice';

export const fetchRoomListAction = createAsyncThunk(
  'fetchEntire',
  async (page: number, { dispatch }) => {
    // 0.修改currentPage
    dispatch(changeCurrentPageAction(page));

    // 1.根据页码获取最新的数据
    // 请求数据前添加遮罩
    dispatch(changeIsLoadingAction(true));
    const res = await getEntireRoomList();
    // 拿到数据后取消遮罩
    dispatch(changeIsLoadingAction(false));

    // 2.获取到最新的数据, 保存redux的store中
    dispatch(changeRoomlistAction(res.list));
    dispatch(changeTotalCountAction(res.totalCount));
  }
);
