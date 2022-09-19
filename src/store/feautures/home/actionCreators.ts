import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData
} from '@/services/modules/home';
import {
  changeGoodPriceAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} from './homeSilce';

/** home请求的所有数据 */
export const fetchHomeDataAction = createAsyncThunk('fetchData', (_payload, { dispatch }) => {
  /** 高性价比 */
  getHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceAction(res));
  });
  /** 折扣 */
  getHomeHighScoreData().then((res) => {
    dispatch(changeHighScoreInfoAction(res));
  });
  /** 热门目的地 */
  getHomeDiscountData().then((res) => {
    dispatch(changeDiscountInfoAction(res));
  });
  /** 推荐 */
  getHomeHotRecommendData().then((res) => {
    dispatch(changeRecommendInfoAction(res));
  });
  /** 你可能想去  */
  getHomeLongforData().then((res) => {
    dispatch(changeLongforInfoAction(res));
  });
  /** plus房源  */
  getHomePlusData().then((res) => {
    dispatch(changePlusInfoAction(res));
  });
});
