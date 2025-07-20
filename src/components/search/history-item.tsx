'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BiTrash } from 'react-icons/bi';

import Pokeball from '@/components/pokeball';
import {
  searchHistoryButton,
  searchHistoryContent,
  searchHistoryText
} from '@/components/search/index.css';
import { usePokemonsContext } from '@/stores/pokemons';
import { SearchHistory, useSearchActions } from '@/stores/search';
import { button } from '@/styles/actions.css';
import { icons } from '@/styles/vars.css';

export default function HistoryItem({ history }: { history: SearchHistory }) {
  const router = useRouter();
  const { total } = usePokemonsContext();
  const { closeSearch, removeHistory } = useSearchActions();
  const [error, setError] = useState(false);

  const { id, image, value } = history;

  const formattedId = value.toString().padStart(total.toString().length, '0');
  const searchHistoryImageSize = 50;

  return (
    <li className={`searchHistoryItem ${error ? 'error' : ''}`}>
      <button
        className={searchHistoryButton}
        onClick={() => {
          if (error) return;
          router.push(`/${value}`);
          closeSearch();
        }}
      >
        <div className={searchHistoryContent}>
          {error ? (
            <Pokeball size={searchHistoryImageSize} />
          ) : (
            <Image
              src={image}
              alt={`No.${formattedId} 포켓몬`}
              width={searchHistoryImageSize}
              height={searchHistoryImageSize}
              onError={() => setError(true)}
            />
          )}
          <div>
            <span className={searchHistoryText}>No.{formattedId}</span>
            <br />
            {error ? '검색 결과 없음' : '포켓몬 상세 보기'}
          </div>
        </div>
        <span
          className={button.sm}
          onClick={e => {
            e.stopPropagation();
            removeHistory(id);
          }}
        >
          <BiTrash size={icons.size.sm} />
          삭제
        </span>
      </button>
    </li>
  );
}
