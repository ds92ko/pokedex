'use client';

import { BiTrash } from 'react-icons/bi';

import HistoryItem from '@/components/search/history-item';
import { searchHistory } from '@/components/search/index.css';
import Section from '@/components/section';
import { usePokemonsContext } from '@/stores/pokemons';
import { useSearchActions, useSearchContext } from '@/stores/search';
import { button } from '@/styles/actions.css';
import { icons } from '@/styles/vars.css';

export default function History() {
  const { total } = usePokemonsContext();
  const { history } = useSearchContext();
  const { removeHistory } = useSearchActions();

  return (
    <div className={searchHistory}>
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
              <HistoryItem
                key={h.id}
                history={h}
              />
            ))}
          </ul>
        ) : (
          <div>검색 기록이 없습니다</div>
        )}
      </Section>
    </div>
  );
}
