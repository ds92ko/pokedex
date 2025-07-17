import { QueryFunction } from '@tanstack/react-query';

import { POKEMON_LIST_QUERY_KEY } from '@/constants/pokemons';

// PokeAPI
export interface PokeApiListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokeApiDetailResponse {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    [key: string]: string | null;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  species: {
    name: string;
    url: string;
  };
}

export interface PokeApiSpeciesResponse {
  id: number;
  name: string;
  color: {
    name: string;
    url: string;
  };
  flavor_text_entries: {
    flavor_text: string;
    language: { name: string };
    version: { name: string };
  }[];
  genera: {
    genus: string;
    language: { name: string };
  }[];
  names: {
    name: string;
    language: { name: string };
  }[];
  evolution_chain: {
    url: string;
  };
  is_legendary: boolean;
  is_mythical: boolean;
  generation: {
    name: string;
  };
}

// Next API Route에서 사용하는 타입 정의
export interface PokemonResultResponse {
  id: number;
  name: string;
  genera: string;
  image: string;
}

export interface PokemonListResponse {
  count: number;
  results: PokemonResultResponse[];
}

export type FetchPokemonList = QueryFunction<
  PokemonListResponse,
  typeof POKEMON_LIST_QUERY_KEY,
  number
>;
