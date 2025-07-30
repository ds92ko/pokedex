'use client';

import { useEffect } from 'react';

import { useFavoritesActions, useFavoritesContext } from '@/stores/favorites';

export default function FavoritePokemons({ children }: { children: React.ReactNode }) {
  const { favorites } = useFavoritesContext();
  const { initializeFavorites } = useFavoritesActions();

  useEffect(() => {
    if (!favorites) initializeFavorites();
  }, [favorites, initializeFavorites]);

  return children;
}
