import { NextRequest, NextResponse } from 'next/server';

import { POKEAPI_BASE_URL, POKEMON_IMAGE_BASE_URL } from '@/constants/api';
import { POKE_API_REVALIDATE } from '@/constants/pokemons';
import {
  NeighboringPokemon,
  NeighboringPokemonResponse,
  PokeApiSpeciesResponse
} from '@/type/pokemons';

async function getNeighboringPokemon(id: number): Promise<NeighboringPokemon> {
  const res = await fetch(`${POKEAPI_BASE_URL}/pokemon-species/${id}`, {
    next: { revalidate: POKE_API_REVALIDATE }
  });

  if (!res.ok) return null;

  const data: PokeApiSpeciesResponse = await res.json();

  return {
    id: data.id,
    name: data.names.find(({ language }) => language.name === 'ko')?.name || '',
    image: `${POKEMON_IMAGE_BASE_URL}/${data.id}.png`
  };
}

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ message: 'Missing or invalid ID' }, { status: 400 });
  }

  try {
    const [prev, next] = await Promise.all([
      getNeighboringPokemon(+id - 1),
      getNeighboringPokemon(+id + 1)
    ]);

    const response: NeighboringPokemonResponse = {
      id: +id,
      prev,
      next
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Failed to fetch pokemon' }, { status: 500 });
  }
}
