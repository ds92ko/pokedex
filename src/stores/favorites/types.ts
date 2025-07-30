import { PokemonCategory } from '@/type/pokemons';

interface FavoritePokemonBase {
  id: number;
  name: string;
  category: PokemonCategory | null;
}
export interface FavoritePokemon extends FavoritePokemonBase {
  image: string;
  animatedImage: string;
  pixelImage: string;
  datetime: string;
}

export interface FavoritesStore {
  context: {
    favorites: FavoritePokemon[] | null;
  };
  actions: {
    addFavorite: (pokemon: FavoritePokemonBase) => void;
    removeFavorite: (id?: FavoritePokemon['id']) => void;
    clearFavorites: () => void;
    initializeFavorites: () => void;
  };
}
