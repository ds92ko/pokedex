import { NextRequest, NextResponse } from 'next/server';

import { POKEMON_LIST_LIMIT } from '@/constants/pokemons';
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
      `${process.env.POKEAPI_BASE_URL}/pokemon?offset=${offset}&limit=${POKEMON_LIST_LIMIT}`
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
            `${process.env.POKEAPI_BASE_URL}/pokemon-species/${pokemon.name}`
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
          name: species.names.find(name => name.language.name === 'ko')?.name || pokemon.name,
          genera: species.genera.find(genus => genus.language.name === 'ko')?.genus || '',
          image: `https://${process.env.POKEMON_IMAGE_HOSTNAME}/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
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
