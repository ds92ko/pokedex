import { NextRequest, NextResponse } from 'next/server';

import { getPokemonDescription } from '@/app/api/pokemons/_utils/translate';
import { POKEAPI_BASE_URL, POKEMON_IMAGE_BASE_URL } from '@/constants/api';
import { POKE_API_REVALIDATE, POKEMON_LIST_LIMIT } from '@/constants/pokemons';
import {
  PokeApiListResponse,
  PokeApiSpeciesResponse,
  PokemonListResponse,
  PokemonResultResponse
} from '@/type/pokemons';

export async function GET(request: NextRequest) {
  const offset = request.nextUrl.searchParams.get('offset') || '0';

  try {
    const listRes = await fetch(
      `${POKEAPI_BASE_URL}/pokemon?offset=${offset}&limit=${POKEMON_LIST_LIMIT}`,
      {
        next: { revalidate: POKE_API_REVALIDATE }
      }
    );

    if (!listRes.ok) {
      return NextResponse.json(
        { message: 'Failed to fetch Pokémon list' },
        { status: listRes.status }
      );
    }

    const list: PokeApiListResponse = await listRes.json();

    const speciesList = await Promise.all(
      list.results.map(async pokemon => {
        try {
          const speciesRes = await fetch(`${POKEAPI_BASE_URL}/pokemon-species/${pokemon.name}`, {
            next: { revalidate: POKE_API_REVALIDATE }
          });
          if (!speciesRes.ok) throw new Error();

          const species: PokeApiSpeciesResponse = await speciesRes.json();
          return species;
        } catch {
          return null;
        }
      })
    );

    const results = await Promise.all(
      list.results.map(async (pokemon, index) => {
        const id = pokemon.url.split('/').at(-2);
        const species = speciesList[index];

        if (!id || !species) return null;

        const description = await getPokemonDescription(species.flavor_text_entries);

        return {
          id: Number(id),
          isLegendary: species.is_legendary,
          isMythical: species.is_mythical,
          name: species.names.find(({ language }) => language.name === 'ko')?.name || pokemon.name,
          genus: species.genera.find(({ language }) => language.name === 'ko')?.genus || '',
          description,
          image: `${POKEMON_IMAGE_BASE_URL}/${id}.png`
        };
      })
    );

    const response: PokemonListResponse = {
      count: list.count,
      results: results.filter(Boolean) as NonNullable<PokemonResultResponse[]>
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Server error in /api/pokemons:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
