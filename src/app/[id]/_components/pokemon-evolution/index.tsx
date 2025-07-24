'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import { fetchPokemonEvolution } from '@/api/pokemon';
import {
  evolutionCard,
  evolutionImage,
  evolutionPokemon,
  evolutionTable,
  evolutionTbody,
  evolutionText,
  evolutionTHead,
  evolutionTHeadCell
} from '@/app/[id]/_components/pokemon-evolution/index.css';
import { assignGridRows } from '@/app/[id]/_components/pokemon-evolution/utils';
import { POKEMON_EVOLUTION_QUERY_KEY } from '@/constants/pokemons';
import { usePokemonsContext } from '@/stores/pokemons';

export default function PokemonEvolution() {
  const { id } = useParams();
  const { total } = usePokemonsContext();

  const { data } = useSuspenseQuery({
    queryKey: POKEMON_EVOLUTION_QUERY_KEY(id),
    queryFn: fetchPokemonEvolution
  });

  const positionedData = assignGridRows(data.evolutionChain);

  return (
    <div className={evolutionTable}>
      <ul className={evolutionTHead}>
        {['기본', '1차', '2차'].map(stage => (
          <li
            key={stage}
            className={evolutionTHeadCell}
          >
            {stage}
          </li>
        ))}
      </ul>
      <ul className={evolutionTbody}>
        {positionedData.map(evolution => {
          return (
            <li
              key={evolution.id}
              style={{
                gridColumn: evolution.gridColumn,
                gridRow: evolution.gridRow
              }}
            >
              <Link
                key={evolution.id}
                className={evolutionCard}
                href={`/${evolution.id}`}
              >
                <Image
                  className={`${evolutionImage} ${data.id === evolution.id ? 'current' : ''}`}
                  src={evolution.image}
                  alt={evolution.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <span className={evolutionText}>
                  No.{evolution.id.toString().padStart(total.toString().length, '0')}
                </span>
                <strong className={evolutionPokemon}>
                  {evolution.name}
                  {evolution.from?.name && (
                    <span className={evolutionText}>
                      &nbsp;·&nbsp;
                      {evolution.from.name}의 진화형
                    </span>
                  )}
                </strong>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
