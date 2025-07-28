import { FavoritePokemon } from '@/stores/favorites/types';

export type SortedFavorites = {
  [key: string]: (favorites: FavoritePokemon[]) => FavoritePokemon[];
};
