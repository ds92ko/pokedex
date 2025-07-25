export interface FavoritePokemon {
  id: number;
  datetime: string;
  name: string;
}

export interface FavoritesStore {
  context: {
    favorites: FavoritePokemon[];
  };
  actions: {
    addFavorite: (pokemon: Omit<FavoritePokemon, 'datetime'>) => void;
    removeFavorite: (id?: FavoritePokemon['id']) => void;
  };
}
