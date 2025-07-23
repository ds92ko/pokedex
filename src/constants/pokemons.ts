import { ParamValue } from 'next/dist/server/request/params';

export const POKE_API_REVALIDATE = 86400; // 24시간

export const POKEMON_LIST_LIMIT = 20;
export const POKEMON_LIST_QUERY_KEY = ['pokemons'] as const;
export const POKEMON_DETAIL_QUERY_KEY = (id: ParamValue) => ['pokemons', id] as const;
export const POKEMON_EVOLUTION_QUERY_KEY = (id: ParamValue) =>
  ['pokemons', id, 'evolution'] as const;
export const POKEMON_NEIGHBOR_QUERY_KEY = (id: ParamValue) => ['pokemons', id, 'neighbor'] as const;
