import { NextRequest, NextResponse } from 'next/server';

import { POKEAPI_BASE_URL, POKEMON_IMAGE_BASE_URL } from '@/constants/api';
import { POKE_API_REVALIDATE } from '@/constants/pokemons';
import {
  EvolutionChain,
  Gender,
  GenderRate,
  NeighboringPokemon,
  PokeApiAbilityResponse,
  PokeApiDetailResponse,
  PokeAPIEvolutionChain,
  PokeAPIEvolutionChainResponse,
  PokeApiSpeciesResponse,
  PokeAPITypeResponse,
  PokemonDetailResponse
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

  async function traverse(chain: PokeAPIEvolutionChain, stage = 0) {
    const speciesUrl = chain.species.url;
    const idMatch = speciesUrl.match(/\/pokemon-species\/(\d+)\//);
    const id = idMatch ? parseInt(idMatch[1], 10) : 0;
    const name = await getKoreanName(speciesUrl);
    const image = `${POKEMON_IMAGE_BASE_URL}/${id}.png`;

    result.push({ id, name, stage, image });

    for (const evo of chain.evolves_to) await traverse(evo, stage + 1);
  }

  await traverse(data.chain);

  return result;
}

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

function getGenders(genderRate: GenderRate): Gender[] {
  if (genderRate === -1) return [];
  if (genderRate === 0) return ['M'];
  if (genderRate === 8) return ['F'];
  return ['F', 'M'];
}

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ message: 'Missing or invalid ID' }, { status: 400 });
  }

  try {
    const [pokemonRes, speciesRes] = await Promise.all([
      fetch(`${POKEAPI_BASE_URL}/pokemon/${id}`, { next: { revalidate: POKE_API_REVALIDATE } }),
      fetch(`${POKEAPI_BASE_URL}/pokemon-species/${id}`, {
        next: { revalidate: POKE_API_REVALIDATE }
      })
    ]);

    if (!pokemonRes.ok) throw new Error('Failed to fetch pokemon');
    if (!speciesRes.ok) throw new Error('Failed to fetch species');

    const [pokemon, species]: [PokeApiDetailResponse, PokeApiSpeciesResponse] = await Promise.all([
      pokemonRes.json(),
      speciesRes.json()
    ]);

    const types = await Promise.all(
      pokemon.types.map(async ({ type }) => {
        const typeRes = await fetch(type.url, { next: { revalidate: POKE_API_REVALIDATE } });
        const typeData: PokeAPITypeResponse = await typeRes.json();

        return {
          key: type.name,
          name: typeData.names.find(({ language }) => language.name === 'ko')?.name ?? type.name
        };
      })
    );

    const abilities = await Promise.all(
      pokemon.abilities.map(async ({ ability, is_hidden }) => {
        const abilityRes = await fetch(ability.url, { next: { revalidate: POKE_API_REVALIDATE } });
        const abilityData: PokeApiAbilityResponse = await abilityRes.json();

        return {
          name:
            abilityData.names.find(({ language }) => language.name === 'ko')?.name || ability.name,
          isHidden: is_hidden,
          description:
            abilityData.flavor_text_entries.find(({ language }) => language.name === 'ko')
              ?.flavor_text || ''
        };
      })
    );

    const evolutionChain = await fetchEvolutionChain(species.evolution_chain.url);

    const [prev, next] = await Promise.all([
      getNeighboringPokemon(+id - 1),
      getNeighboringPokemon(+id + 1)
    ]);

    const response: PokemonDetailResponse = {
      id: pokemon.id,
      name: species.names.find(({ language }) => language.name === 'ko')?.name || pokemon.name,
      types,
      abilities,
      isLegendary: species.is_legendary,
      isMythical: species.is_mythical,
      genus: species.genera.find(({ language }) => language.name === 'ko')?.genus || '',
      genders: getGenders(species.gender_rate),
      height: pokemon.height / 10,
      weight: pokemon.weight / 10,
      description:
        species.flavor_text_entries
          .find(({ language }) => language.name === 'ko')
          ?.flavor_text.replace(/\n/g, ' ') || '',
      evolutionChain,
      image: `${POKEMON_IMAGE_BASE_URL}/${id}.png`,
      prev,
      next
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Failed to fetch pokemon' }, { status: 500 });
  }
}
