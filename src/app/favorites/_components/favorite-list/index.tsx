'use client';

import { useSearchParams } from 'next/navigation';

import FavoriteItem from '@/app/favorites/_components/favorite-item';
import { favoriteList } from '@/app/favorites/_components/favorite-list/index.css';
import FavoriteListSkeleton from '@/app/favorites/_components/favorite-list/skeleton';
import { sortedFavorites } from '@/app/favorites/_components/favorite-list/utils';
import { DEFAULT_SORT } from '@/app/favorites/_components/sort-select/constants';
import NoData from '@/components/common/no-data';
import { useFavoritesContext } from '@/stores/favorites';

export default function FavoriteList() {
  const searchParams = useSearchParams();
  const { favorites } = useFavoritesContext();
  const sort = searchParams.get('sort') || DEFAULT_SORT;

  if (!Array.isArray(favorites)) return <FavoriteListSkeleton />;
  if (!favorites.length) return <NoData>포획한 포켓몬이 없습니다.</NoData>;

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
