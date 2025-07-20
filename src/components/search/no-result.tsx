import { BiError } from 'react-icons/bi';

import { searchHistoryImageSize } from '@/components/search/constants';
import { noResult } from '@/components/search/index.css';
import { vars } from '@/styles/vars.css';

export default function NoResult() {
  return (
    <div className={noResult}>
      <BiError
        size={searchHistoryImageSize}
        color={vars.colors.primary}
      />
      <p>검색 기록이 없습니다.</p>
    </div>
  );
}
