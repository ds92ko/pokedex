import Image from 'next/image';
import Link from 'next/link';

import {
  pokemonCard,
  pokemonCardImage,
  pokemonCardName,
  pokemonCardNumber,
  pokemonCardTitle
} from '@/components/pokemon-list/index.css';
import { PokemonResultResponse } from '@/type/pokemons';

export default function PokemonItem({
  count,
  result
}: {
  count: number;
  result: PokemonResultResponse;
}) {
  return (
    <li>
      <Link
        className={pokemonCard}
        href={`/${result.id}`}
      >
        <div className={pokemonCardImage}>
          <Image
            src={result.image}
            alt={result.name}
            fill
          />
        </div>
        <div>
          <span className={pokemonCardNumber}>
            No.{result.id.toString().padStart(count.toString().length, '0')}
          </span>
          <h3 className={pokemonCardTitle}>
            <span className={pokemonCardName}>{result.name}</span> · {result.genus}
          </h3>
          <p>{result.description}</p>
        </div>
      </Link>
    </li>
  );
}
