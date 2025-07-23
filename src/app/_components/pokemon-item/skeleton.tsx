import {
  pokemonCard,
  pokemonCardImage,
  pokemonCardNumber,
  pokemonCardTitle
} from '@/app/_components/pokemon-item/index.css';
import Pokeball from '@/components/common/pokeball';
import { POKEMON_LIST_LIMIT } from '@/constants/pokemons';
import { skeleton } from '@/styles/skeleton.css';

export default function PokemonItemsSkeleton() {
  return Array(POKEMON_LIST_LIMIT)
    .fill('pokemon-item-skeleton')
    .map((val, idx) => (
      <li key={`${val}-${idx}`}>
        <div className={pokemonCard}>
          <div className={pokemonCardImage}>
            <Pokeball />
          </div>
          <div>
            <span className={`${pokemonCardNumber} ${skeleton}`}>No.0000</span>
            <h3 className={`${pokemonCardTitle} ${skeleton}`}>포켓몬 이름 · 포켓몬 분류</h3>
            <p className={skeleton}>포켓몬 설명</p>
          </div>
        </div>
      </li>
    ));
}
