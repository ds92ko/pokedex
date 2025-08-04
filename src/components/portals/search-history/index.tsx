'use client';

import { BiTrash } from 'react-icons/bi';

import NoData from '@/components/common/no-data';
import Section from '@/components/layouts/section';
import Portal from '@/components/portals/portal';
import { searchHistory } from '@/components/portals/search-history/index.css';
import SearchHistoryItem from '@/components/portals/search-history-item';
import { useSearchActions, useSearchContext } from '@/stores/search';
import { button } from '@/styles/actions.css';
import { icons } from '@/styles/vars.css';

export default function SearchHistory() {
  const { open, history } = useSearchContext();
  const { removeHistory } = useSearchActions();

  return (
    <Portal
      conditional={open}
      delay={300}
    >
      <div className={searchHistory[open ? 'open' : 'close']}>
        <Section title="검색 안내">
          <ul>
            <li>포켓몬 이름 혹은 도감 번호로 검색할 수 있어요.</li>
            <li>이름 검색은 한국어만 지원합니다.</li>
          </ul>
        </Section>
        <Section
          title="검색 기록"
          titleContent={
            <button
              className={button.md}
              onClick={() => removeHistory()}
              disabled={!history.length}
            >
              <BiTrash size={icons.size.md} />
              전체 삭제
            </button>
          }
        >
          {history.length ? (
            <ul>
              {history.map(h => (
                <SearchHistoryItem
                  key={h.id}
                  history={h}
                />
              ))}
            </ul>
          ) : (
            <NoData>검색 기록이 없습니다.</NoData>
          )}
        </Section>
      </div>
    </Portal>
  );
}
