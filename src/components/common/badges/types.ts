import { PokemonCategory, PokemonTypeKey } from '@/type/pokemons';

export interface TypeBadge {
  kind?: 'type';
  key: PokemonTypeKey;
  name: string;
}

export interface CategoryBadge {
  kind: 'category';
  key: PokemonCategory;
  name: string;
}

export interface BadgesProps {
  badges: (TypeBadge | CategoryBadge)[];
}

export type BadgeIcons = {
  [key in PokemonTypeKey | PokemonCategory]: string;
};
