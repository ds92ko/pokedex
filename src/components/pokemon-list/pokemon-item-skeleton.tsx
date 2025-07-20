import Pokeball from '@/components/pokeball';
import {
  pokemonCard,
  pokemonCardImage,
  pokemonCardNumber,
  pokemonCardTitle
} from '@/components/pokemon-list/index.css';
import { skeleton } from '@/styles/skeleton.css';

export default function PokemonItemSkeleton() {
  return (
    <li>
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
  );
}
