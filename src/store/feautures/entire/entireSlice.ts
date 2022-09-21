import { createSlice } from '@reduxjs/toolkit';

import { IInitialState } from './types';

const initialState: IInitialState = {
  currentPage: 0, // 当前页码
  roomList: [], // 房间列表
  totalCount: 0, // 总数据个数
  isLoading: false
};

const entireSlice = createSlice({
  name: 'entire',
  initialState,
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload;
    },
    changeRoomlistAction(state, { payload }) {
      state.roomList = payload;
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload;
    },
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload;
    }
  }
});

export const {
  changeCurrentPageAction,
  changeRoomlistAction,
  changeTotalCountAction,
  changeIsLoadingAction
} = entireSlice.actions;
export default entireSlice.reducer;
