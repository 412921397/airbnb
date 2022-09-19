import { FC, memo, useEffect } from 'react';

import { useDispatch, useSelector, shallowEqual } from '@/store';
import { fetchHomeDataAction } from '@/store/feautures/home/actionCreators';
import HomeBanner from './c-cpns/home-banner';
import HomeSectionV1 from './c-cpns/home-section-v1';
import HomeSectionV2 from './c-cpns/home-section-v2';
import HomeSectionV3 from './c-cpns/home-section-v3/idnex';
import HomeLonfor from './c-cpns/home-longfor';
import { HomeWrapper } from './style';
import { isEmptyOJB } from '@/utils';

const Home: FC = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } =
    useSelector(
      (state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
        longforInfo: state.home.longforInfo,
        plusInfo: state.home.plusInfo
      }),
      shallowEqual
    );

  /** 请求数据 */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyOJB(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyOJB(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {isEmptyOJB(longforInfo) && <HomeLonfor infoData={longforInfo} />}
        {isEmptyOJB(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyOJB(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyOJB(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
