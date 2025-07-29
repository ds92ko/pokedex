'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import { fetchPokemonNeighbor } from '@/api/pokemon';
import { POKEMON_NAV_IMAGE_SIZE } from '@/app/[id]/_components/pokemon-nevigation/constants';
import {
  pokemonNavItem,
  pokemonNavLink,
  pokemonNavLinkImage,
  pokemonNavLinkSpan,
  pokemonNavLinkText,
  pokemonNavList
} from '@/app/[id]/_components/pokemon-nevigation/index.css';
import Pokeball from '@/components/common/pokeball';
import { POKEMON_NEIGHBOR_QUERY_KEY } from '@/constants/pokemons';

export default function PokemonNavigation() {
  const { id } = useParams();

  const { data } = useSuspenseQuery({
    queryKey: POKEMON_NEIGHBOR_QUERY_KEY(id),
    queryFn: fetchPokemonNeighbor
  });

  return (
    <nav>
      <ul className={pokemonNavList}>
        <li className={`${pokemonNavItem} ${data.prev ? '' : 'disabled'}`}>
          {data.prev ? (
            <Link
              className={pokemonNavLink}
              href={`/${data.prev.id}`}
            >
              <Image
                className={pokemonNavLinkImage}
                src={data.prev.image}
                alt={data.prev.name}
                width={POKEMON_NAV_IMAGE_SIZE}
                height={POKEMON_NAV_IMAGE_SIZE}
              />
              <div className={pokemonNavLinkText}>
                <span className={pokemonNavLinkSpan}>이전</span>
                <strong>{data.prev.name}</strong>
              </div>
            </Link>
          ) : (
            <div className={pokemonNavLink}>
              <div className={pokemonNavLinkImage}>
                <Pokeball />
              </div>
              <div className={pokemonNavLinkText}>
                <span className={pokemonNavLinkSpan}>이전</span>
                <strong>X</strong>
              </div>
            </div>
          )}
        </li>
        <li className={pokemonNavItem}>
          <Link
            className={pokemonNavLink}
            href="/"
          >
            목록
          </Link>
        </li>
        <li className={`${pokemonNavItem} ${data.next ? '' : 'disabled'}`}>
          {data.next ? (
            <Link
              className={pokemonNavLink}
              href={`/${data.next.id}`}
            >
              <Image
                className={pokemonNavLinkImage}
                src={data.next.image}
                alt={data.next.name}
                width={POKEMON_NAV_IMAGE_SIZE}
                height={POKEMON_NAV_IMAGE_SIZE}
              />
              <div className={pokemonNavLinkText}>
                <span className={pokemonNavLinkSpan}>다음</span>
                <strong>{data.next.name}</strong>
              </div>
            </Link>
          ) : (
            <div className={pokemonNavLink}>
              <div className={pokemonNavLinkImage}>
                <Pokeball />
              </div>
              <div className={pokemonNavLinkText}>
                <span className={pokemonNavLinkSpan}>다음</span>
                <strong>X</strong>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
