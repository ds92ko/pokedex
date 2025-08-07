import { translate } from '@vitalets/google-translate-api';

import { PokeApiAbilityResponse, PokeApiSpeciesResponse } from '@/type/pokemons';

async function safeTranslate(text: string): Promise<string> {
  try {
    const { text: translated } = await translate(text, { to: 'ko' });
    return translated || text;
  } catch {
    return text;
  }
}

export async function getPokemonDescription(
  flavorTextEntries: PokeApiSpeciesResponse['flavor_text_entries']
): Promise<string> {
  const koText = flavorTextEntries.find(({ language }) => language.name === 'ko')?.flavor_text;
  if (koText) return koText.replace(/\n/g, ' ');

  const enText = flavorTextEntries.find(({ language }) => language.name === 'en')?.flavor_text;
  if (enText) {
    const enTextWithoutNewlines = enText.replace(/\n/g, ' ');
    return safeTranslate(enTextWithoutNewlines);
  }

  return '';
}

export async function getPokemonAbilityName(
  names: PokeApiAbilityResponse['names']
): Promise<string> {
  const koName = names.find(({ language }) => language.name === 'ko')?.name;
  if (koName) return koName;

  const enName = names.find(({ language }) => language.name === 'en')?.name;
  if (enName) {
    const enNameWithoutHyphens = enName.replace(/-/g, ' ');
    return safeTranslate(enNameWithoutHyphens);
  }

  return '';
}

export async function getPokemonAbilityDescription(
  flavorTextEntries: PokeApiAbilityResponse['flavor_text_entries']
) {
  const koText = flavorTextEntries.find(({ language }) => language.name === 'ko')?.flavor_text;
  if (koText) return koText.replace(/\n/g, ' ');

  const enText = flavorTextEntries.find(({ language }) => language.name === 'en')?.flavor_text;
  if (enText) {
    const enTextWithoutNewlines = enText.replace(/\n/g, ' ');
    return safeTranslate(enTextWithoutNewlines);
  }

  return '';
}
