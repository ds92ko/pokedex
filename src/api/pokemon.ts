import { FetchPokemonList } from '@/type/pokemons';

export const fetchPokemonList: FetchPokemonList = async ({ pageParam = 0 }) => {
  try {
    const res = await fetch(`/api/pokemons?offset=${pageParam}`);

    if (!res.ok) throw new Error(`Failed to fetch Pokémon list: ${res.status} ${res.statusText}`);

    return res.json();
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);

    throw error;
  }
};
