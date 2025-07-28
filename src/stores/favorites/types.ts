export interface FavoritePokemon {
  id: number;
  name: string;
  image: string;
  datetime: string;
}

export interface FavoritesStore {
  context: {
    favorites: FavoritePokemon[];
  };
  actions: {
    addFavorite: (pokemon: Omit<FavoritePokemon, 'datetime' | 'image'>) => void;
    removeFavorite: (id?: FavoritePokemon['id']) => void;
  };
}
