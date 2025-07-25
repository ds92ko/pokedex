import Link from 'next/dist/client/link';

import { POKEMON_NAV_IMAGE_SIZE } from '@/app/[id]/_components/pokemon-nevigation/constants';
import {
  NeighboringPokemonName,
  pokemonNavItem,
  pokemonNavLink,
  pokemonNavLinkSpan,
  pokemonNavLinkText,
  pokemonNavList
} from '@/app/[id]/_components/pokemon-nevigation/index.css';
import Pokeball from '@/components/common/pokeball';
import { skeleton } from '@/styles/skeleton.css';

export default function PokemonNavigationSkeleton() {
  return (
    <nav>
      <ul className={pokemonNavList}>
        <li className={`${pokemonNavItem} disabled`}>
          <div className={pokemonNavLink}>
            <Pokeball size={POKEMON_NAV_IMAGE_SIZE} />
            <div className={pokemonNavLinkText}>
              <span className={pokemonNavLinkSpan}>이전</span>
              <strong className={`${NeighboringPokemonName} ${skeleton}`}>이전 포켓몬 이름</strong>
            </div>
          </div>
        </li>
        <li className={pokemonNavItem}>
          <Link
            className={pokemonNavLink}
            href="/"
          >
            목록
          </Link>
        </li>
        <li className={`${pokemonNavItem} disabled`}>
          <div className={pokemonNavLink}>
            <Pokeball size={POKEMON_NAV_IMAGE_SIZE} />
            <div className={pokemonNavLinkText}>
              <span className={pokemonNavLinkSpan}>다음</span>
              <strong className={`${NeighboringPokemonName} ${skeleton}`}>다음 포켓몬 이름</strong>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
