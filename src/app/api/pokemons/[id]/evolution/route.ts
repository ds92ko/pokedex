import { NextRequest, NextResponse } from 'next/server';

import { POKEAPI_BASE_URL, POKEMON_IMAGE_BASE_URL } from '@/constants/api';
import { POKE_API_REVALIDATE } from '@/constants/pokemons';
import {
  EvolutionChain,
  EvolutionChainResponse,
  PokeAPIEvolutionChain,
  PokeAPIEvolutionChainResponse,
  PokeApiSpeciesResponse
} from '@/type/pokemons';

async function fetchEvolutionChain(url: string): Promise<EvolutionChain[]> {
  const res = await fetch(url, { next: { revalidate: POKE_API_REVALIDATE } });
  if (!res.ok) throw new Error('Failed to fetch evolution chain');

  const data: PokeAPIEvolutionChainResponse = await res.json();
  const result: EvolutionChain[] = [];

  async function getKoreanName(speciesUrl: string): Promise<string> {
    const res = await fetch(speciesUrl, { next: { revalidate: POKE_API_REVALIDATE } });
    if (!res.ok) return '';
    const speciesData: PokeApiSpeciesResponse = await res.json();
    return speciesData.names.find(({ language }) => language.name === 'ko')?.name || '';
  }

  async function traverse(
    chain: PokeAPIEvolutionChain,
    stage: number = 0,
    from: {
      id: number;
      name: string;
    } | null = null
  ) {
    const speciesUrl = chain.species.url;
    const idMatch = speciesUrl.match(/\/pokemon-species\/(\d+)\//);
    const id = idMatch ? parseInt(idMatch[1], 10) : 0;
    const name = await getKoreanName(speciesUrl);
    const image = `${POKEMON_IMAGE_BASE_URL}/${id}.png`;

    const evolution = { id, name, stage, image, from };

    result.push(evolution);

    for (const evo of chain.evolves_to) {
      await traverse(evo, stage + 1, { id, name });
    }
  }

  await traverse(data.chain);
  return result;
}

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ message: 'Missing or invalid ID' }, { status: 400 });
  }

  try {
    const speciesRes = await fetch(`${POKEAPI_BASE_URL}/pokemon-species/${id}`, {
      next: { revalidate: POKE_API_REVALIDATE }
    });

    if (!speciesRes.ok) throw new Error('Failed to fetch species');

    const species: PokeApiSpeciesResponse = await speciesRes.json();

    const evolutionChain = await fetchEvolutionChain(species.evolution_chain.url);

    const response: EvolutionChainResponse = {
      id: species.id,
      evolutionChain
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Failed to fetch evolution chain' }, { status: 500 });
  }
}
