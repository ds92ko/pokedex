'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BiTrash } from 'react-icons/bi';

import Pokeball from '@/components/common/pokeball';
import { SEARCH_HISTORY_IMAGE_SIZE } from '@/components/portals/search-history/constants';
import {
  searchHistoryButton,
  searchHistoryContent,
  searchHistoryText
} from '@/components/portals/search-history-item/index.css';
import { HistoryItemProps } from '@/components/portals/search-history-item/types';
import { usePokemonsContext } from '@/stores/pokemons';
import { useSearchActions } from '@/stores/search';
import { button } from '@/styles/actions.css';
import { icons } from '@/styles/vars.css';

export default function SearchHistoryItem({ history }: HistoryItemProps) {
  const router = useRouter();
  const { total } = usePokemonsContext();
  const { closeSearch, removeHistory } = useSearchActions();
  const [error, setError] = useState(false);

  const { id, image, name } = history;

  const formattedId = id.toString().padStart(total.toString().length, '0');

  return (
    <li className={`searchHistoryItem ${error ? 'error' : ''}`}>
      <button
        className={searchHistoryButton}
        onClick={() => {
          if (error) return;
          router.push(`/${id}`);
          closeSearch();
        }}
      >
        <div className={searchHistoryContent}>
          {error ? (
            <Pokeball size={SEARCH_HISTORY_IMAGE_SIZE} />
          ) : (
            <Image
              src={image}
              alt={`No.${formattedId} 포켓몬`}
              width={SEARCH_HISTORY_IMAGE_SIZE}
              height={SEARCH_HISTORY_IMAGE_SIZE}
              onError={() => setError(true)}
            />
          )}
          <div>
            <span className={searchHistoryText}>No.{formattedId}</span>
            <br />
            {error ? '검색 결과 없음' : `${name} 상세 보기`}
          </div>
        </div>
        <span
          className={`${button.sm} outline`}
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
