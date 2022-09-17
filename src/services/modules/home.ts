import qlRequest from '..';

/** 高性价比 */
export function getHomeGoodPriceData() {
  return qlRequest.get({ url: '/home/goodprice' });
}
