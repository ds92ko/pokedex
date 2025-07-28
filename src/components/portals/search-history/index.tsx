'use client';

import { BiTrash } from 'react-icons/bi';

import NoData from '@/components/common/no-data';
import Section from '@/components/layouts/section';
import Portal from '@/components/portals/portal';
import { searchHistory } from '@/components/portals/search-history/index.css';
import SearchHistoryItem from '@/components/portals/search-history-item';
import { usePokemonsContext } from '@/stores/pokemons';
import { useSearchActions, useSearchContext } from '@/stores/search';
import { button } from '@/styles/actions.css';
import { icons } from '@/styles/vars.css';

export default function SearchHistory() {
  const { total } = usePokemonsContext();
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
            <li>포켓몬 도감 번호 기준으로 검색합니다.</li>
            <li>최대 {total.toString().length}자리 숫자만 입력 가능합니다.</li>
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
