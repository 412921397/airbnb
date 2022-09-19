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
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    }
  }
});

export const {
  changeGoodPriceAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions;
export default homeSlice.reducer;
