import { QueryFunction } from '@tanstack/react-query';

export const POKEMON_LIST_LIMIT = 20;
export const POKEMON_LIST_QUERY_KEY = ['pokemon', 'list'] as const;

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};

export type FetchPokemonList = QueryFunction<
  PokemonListResponse,
  typeof POKEMON_LIST_QUERY_KEY,
  number
>;

export const fetchPokemonList: FetchPokemonList = async ({ pageParam = 0 }) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${pageParam}&limit=${POKEMON_LIST_LIMIT}`
  );
  if (!res.ok) throw new Error('Failed to fetch Pokémon list');
  return res.json();
};
