import { translate } from '@vitalets/google-translate-api';

import { PokeApiSpeciesResponse } from '@/type/pokemons';

export async function getPokemonDescription(
  flavorTextEntries: PokeApiSpeciesResponse['flavor_text_entries']
): Promise<string> {
  const koText = flavorTextEntries.find(({ language }) => language.name === 'ko')?.flavor_text;

  if (koText) return koText.replace(/\n/g, ' ');

  const enText = flavorTextEntries.find(({ language }) => language.name === 'en')?.flavor_text;

  if (enText) {
    const enTextWithoutNewlines = enText.replace(/\n/g, ' ');
    const { text } = await translate(enTextWithoutNewlines, {
      to: 'ko'
    });

    return text || enTextWithoutNewlines;
  }

  return '';
}
