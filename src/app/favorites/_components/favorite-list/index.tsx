'use client';

import FavoriteItem from '@/app/favorites/_components/favorite-item';
import { favoriteList } from '@/app/favorites/_components/favorite-list/index.css';
import { useFavoritesContext } from '@/stores/favorites';

export default function FavoriteList() {
  const { favorites } = useFavoritesContext();

  return (
    <ul className={favoriteList}>
      {favorites.map(pokemon => (
        <FavoriteItem
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </ul>
  );
}
