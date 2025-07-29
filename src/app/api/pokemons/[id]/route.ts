import { NextRequest, NextResponse } from 'next/server';

import { getPokemonDescription } from '@/app/api/pokemons/_utils/translate';
import { POKEAPI_BASE_URL, POKEMON_IMAGE_BASE_URL } from '@/constants/api';
import { POKE_API_REVALIDATE } from '@/constants/pokemons';
import {
  Gender,
  GenderRate,
  PokeApiAbilityResponse,
  PokeApiDetailResponse,
  PokeApiSpeciesResponse,
  PokeAPITypeResponse,
  PokemonDetailResponse
} from '@/type/pokemons';

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

    const description = await getPokemonDescription(species.flavor_text_entries);

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
      description,
      image: `${POKEMON_IMAGE_BASE_URL}/${id}.png`
    };

    return NextResponse.json(response);
  } catch {
    return NextResponse.json({ message: 'Failed to fetch pokemon' }, { status: 500 });
  }
}
