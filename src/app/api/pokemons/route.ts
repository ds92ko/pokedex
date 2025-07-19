import { NextRequest, NextResponse } from 'next/server';

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
      `${process.env.POKEAPI_BASE_URL}/pokemon?offset=${offset}&limit=${POKEMON_LIST_LIMIT}`,
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
          const speciesRes = await fetch(
            `${process.env.POKEAPI_BASE_URL}/pokemon-species/${pokemon.name}`,
            {
              next: { revalidate: POKE_API_REVALIDATE }
            }
          );
          if (!speciesRes.ok) throw new Error();

          const species: PokeApiSpeciesResponse = await speciesRes.json();
          return species;
        } catch {
          return null;
        }
      })
    );

    const results = list.results
      .map((pokemon, index) => {
        const id = pokemon.url.split('/').at(-2);
        const species = speciesList[index];

        if (!id || !species) return null;

        return {
          id: Number(id),
          name: species.names.find(({ language }) => language.name === 'ko')?.name || pokemon.name,
          genus: species.genera.find(({ language }) => language.name === 'ko')?.genus || '',
          description:
            species.flavor_text_entries
              .find(({ language, version }) => language.name === 'ko' && version.name === 'sword')
              ?.flavor_text.replace(/\n/g, ' ') || '',
          image: `${process.env.NEXT_PUBLIC_POKEMON_IMAGE_URL}/${id}.png`
        };
      })
      .filter(Boolean) as NonNullable<PokemonResultResponse[]>;

    const response: PokemonListResponse = {
      count: list.count,
      results
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Server error in /api/pokemons:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
