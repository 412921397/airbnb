import { FC, memo } from 'react';
import DetailInfos from './c-cpns/detail-infos';
import DetailPicture from './c-cpns/detail-pictures';

import { DetailWrapper } from './style';

const Detail: FC = memo(() => {
  return (
    <DetailWrapper>
      <DetailInfos />
      <DetailPicture />
    </DetailWrapper>
  );
});

export default Detail;
