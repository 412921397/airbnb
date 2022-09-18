import { FC, memo, useEffect } from 'react';

import { useDispatch, useSelector, shallowEqual } from '@/store';
import { fetchHomeDataAction } from '@/store/feautures/home/actionCreators';
import HomeBanner from './c-cpns/home-banner';
import HomeSectionV1 from './c-cpns/home-section-v1';
import HomeSectionV2 from './c-cpns/home-section-v2';
import { HomeWrapper } from './style';
import { isEmptyOJB } from '@/utils';

const Home: FC = memo(() => {
  const { goodPriceInfo, highScoreInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo
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
        {isEmptyOJB(goodPriceInfo) && <HomeSectionV2 infoData={goodPriceInfo} />}
        {isEmptyOJB(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyOJB(goodPriceInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
