import { FC, memo } from 'react';

import { SectionsWrapper } from './style';

interface IProps {
  searchInfos: any[];
}

const SearchSection: FC<IProps> = memo((props) => {
  const { searchInfos } = props;

  return (
    <SectionsWrapper>
      {searchInfos.map((item, index) => {
        return (
          <div key={index} className="item">
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
            {index !== searchInfos.length - 1 && <div className="divider"></div>}
          </div>
        );
      })}
    </SectionsWrapper>
  );
});

export default SearchSection;
