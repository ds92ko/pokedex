import { notFound } from 'next/navigation';

import { getPokemonDescription } from '@/app/api/pokemons/_utils/translate';
import { POKEAPI_BASE_URL } from '@/constants/api';
import { POKE_API_REVALIDATE } from '@/constants/pokemons';
import {
  FetchPokemonDetail,
  FetchPokemonEvolution,
  FetchPokemonList,
  FetchPokemonNeighbor,
  PokeApiSpeciesResponse
} from '@/type/pokemons';

export const fetchPokemonList: FetchPokemonList = async ({ pageParam = 0 }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemons?offset=${pageParam}`,
      {
        next: {
          revalidate: POKE_API_REVALIDATE
        }
      }
    );

    if (res.status === 404) notFound();
    if (!res.ok) throw new Error(`Failed to fetch Pokémon list: ${res.status} ${res.statusText}`);

    return res.json();
  } catch (error) {
    throw error;
  }
};

export const fetchPokemonMetadata = async (id: string) => {
  try {
    const res = await fetch(`${POKEAPI_BASE_URL}/pokemon-species/${id}`, {
      next: {
        revalidate: POKE_API_REVALIDATE
      }
    });

    if (res.status === 404) notFound();
    if (!res.ok) throw new Error(`Failed to fetch Pokémon name: ${res.status} ${res.statusText}`);

    const data: PokeApiSpeciesResponse = await res.json();
    const description = await getPokemonDescription(data.flavor_text_entries);

    return {
      title: data.names.find(({ language }) => language.name === 'ko')?.name || data.name,
      description
    };
  } catch (error) {
    throw error;
  }
};

export const fetchPokemonDetail: FetchPokemonDetail = async ({ queryKey }) => {
  const [_, id] = queryKey;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemons/${id}`, {
      next: {
        revalidate: POKE_API_REVALIDATE
      }
    });

    if (res.status === 404) notFound();
    if (!res.ok) throw new Error(`Failed to fetch Pokémon detail: ${res.status} ${res.statusText}`);

    return res.json();
  } catch (error) {
    throw error;
  }
};

export const fetchPokemonEvolution: FetchPokemonEvolution = async ({ queryKey }) => {
  const [_, id] = queryKey;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemons/${id}/evolution`, {
      next: {
        revalidate: POKE_API_REVALIDATE
      }
    });

    if (res.status === 404) notFound();
    if (!res.ok)
      throw new Error(`Failed to fetch Pokémon evolution: ${res.status} ${res.statusText}`);

    return res.json();
  } catch (error) {
    throw error;
  }
};

export const fetchPokemonNeighbor: FetchPokemonNeighbor = async ({ queryKey }) => {
  const [_, id] = queryKey;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemons/${id}/neighbor`, {
      next: {
        revalidate: POKE_API_REVALIDATE
      }
    });

    if (res.status === 404) notFound();
    if (!res.ok)
      throw new Error(`Failed to fetch Pokémon neighbor: ${res.status} ${res.statusText}`);

    return res.json();
  } catch (error) {
    throw error;
  }
};
