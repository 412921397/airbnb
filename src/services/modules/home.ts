import qlRequest from '..';

/** 高性价比 */
export function getHomeGoodPriceData() {
  return qlRequest.get({
    url: '/home/goodprice'
  });
}

/** 高分好评 */
export function getHomeHighScoreData() {
  return qlRequest.get({
    url: '/home/highscore'
  });
}

/** 折扣 */
export function getHomeDiscountData() {
  return qlRequest.get({
    url: '/home/discount'
  });
}

/** 推荐房源 */
export function getHomeHotRecommendData() {
  return qlRequest.get({
    url: '/home/hotrecommenddest'
  });
}

/** 希望  */
export function getHomeLongforData() {
  return qlRequest.get({
    url: '/home/longfor'
  });
}

/** plus  */
export function getHomePlusData() {
  return qlRequest.get({
    url: '/home/plus'
  });
}
