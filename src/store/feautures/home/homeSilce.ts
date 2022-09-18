import { createSlice } from '@reduxjs/toolkit';

import { IInitialState } from './types';

const initialState: IInitialState = {
  goodPriceInfo: {},
  highScoreInfo: {},
  discountInfo: {},
  recommendInfo: {},
  longforInfo: {},
  plusInfo: {}
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    }
  }
});

export const { changeGoodPriceAction, changeHighScoreInfoAction } = homeSlice.actions;
export default homeSlice.reducer;
