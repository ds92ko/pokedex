import Image from 'next/image';
import Link from 'next/link';

import {
  pokemonCard,
  pokemonCardBadge,
  pokemonCardImage,
  pokemonCardName,
  pokemonCardNumber,
  pokemonCardText,
  pokemonCardTitle
} from '@/app/_components/pokemon-item/index.css';
import { PokemonItemProps } from '@/app/_components/pokemon-item/types';
import Badges from '@/components/common/badges';

export default function PokemonItem({ count, result }: PokemonItemProps) {
  const badges = [
    ...(result.isLegendary
      ? [{ kind: 'category', key: 'legendary', name: '전설의 포켓몬' } as const]
      : []),
    ...(result.isMythical
      ? [{ kind: 'category', key: 'mythical', name: '환상의 포켓몬' } as const]
      : [])
  ];

  return (
    <li>
      <Link
        className={`${pokemonCard} ${result.isLegendary ? 'legendary' : result.isMythical ? 'mythical' : ''}`}
        href={`/${result.id}`}
      >
        {Boolean(badges.length) && (
          <div className={pokemonCardBadge}>
            <Badges badges={badges} />
          </div>
        )}
        <div className={pokemonCardImage}>
          <Image
            src={result.image}
            alt={result.name}
            fill
          />
        </div>
        <div className={pokemonCardText}>
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
