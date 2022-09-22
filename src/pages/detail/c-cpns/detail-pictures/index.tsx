import { FC, memo, useState } from 'react';

import { shallowEqual, useSelector } from '@/store';
import PictureBrowser from '@/base-ui/picture-browser';
import { PicturesWrapper } from './style';

const DetailPicture: FC = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false);

  const { detailInfo } = useSelector(
    (state) => ({ detailInfo: state.detail.detailInfo }),
    shallowEqual
  );

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={() => setShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5)?.map((item: string) => {
            return (
              <div className="item" key={item} onClick={() => setShowBrowser(true)}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="show-btn" onClick={() => setShowBrowser(true)}>
        显示照片
      </div>
      {showBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo.picture_urls}
          closeClick={() => setShowBrowser(false)}
        />
      )}
    </PicturesWrapper>
  );
});

export default DetailPicture;
