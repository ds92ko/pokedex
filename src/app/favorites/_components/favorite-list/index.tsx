'use client';

import { useSearchParams } from 'next/navigation';

import FavoriteItem from '@/app/favorites/_components/favorite-item';
import { favoriteList } from '@/app/favorites/_components/favorite-list/index.css';
import { sortedFavorites } from '@/app/favorites/_components/favorite-list/utils';
import { DEFAULT_SORT } from '@/app/favorites/_components/sort-select/constants';
import { useFavoritesContext } from '@/stores/favorites';

export default function FavoriteList() {
  const searchParams = useSearchParams();
  const { favorites } = useFavoritesContext();
  const sort = searchParams.get('sort') || DEFAULT_SORT;

  return (
    <ul className={favoriteList}>
      {sortedFavorites[sort](favorites).map(pokemon => (
        <FavoriteItem
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </ul>
  );
}
