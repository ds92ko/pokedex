import { POKE_API_REVALIDATE } from '@/constants/pokemons';
import { FetchPokemonDetail, FetchPokemonList } from '@/type/pokemons';

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

    if (!res.ok) throw new Error(`Failed to fetch Pokémon list: ${res.status} ${res.statusText}`);

    return res.json();
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);

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

    if (!res.ok) throw new Error(`Failed to fetch Pokémon detail: ${res.status} ${res.statusText}`);

    return res.json();
  } catch (error) {
    console.error('Error fetching Pokémon detail:', error);

    throw error;
  }
};
