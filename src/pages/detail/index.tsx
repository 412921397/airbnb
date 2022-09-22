import { FC, memo, useEffect } from 'react';
import { useDispatch } from '@/store';
import { changeHeaderConfigAction } from '@/store/feautures/main';

import DetailInfos from './c-cpns/detail-infos';
import DetailPicture from './c-cpns/detail-pictures';
import { DetailWrapper } from './style';

const Detail: FC = memo(() => {
  const dispatch = useDispatch();
  /** 设置导航栏是否置顶 */
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }));
  }, [dispatch]);

  return (
    <DetailWrapper>
      <DetailInfos />
      <DetailPicture />
    </DetailWrapper>
  );
});

export default Detail;
