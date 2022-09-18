import { createAsyncThunk } from '@reduxjs/toolkit';

import { getHomeGoodPriceData, getHomeHighScoreData } from '@/services/modules/home';
import { changeGoodPriceAction, changeHighScoreInfoAction } from './homeSilce';

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
});
