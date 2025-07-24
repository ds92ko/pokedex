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
import { skeleton } from '@/styles/skeleton.css';

export default function PokemonEvolutionSkeleton() {
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
        <li>
          <div className={evolutionCard}>
            <div className={`${evolutionImage} ${skeleton}`} />
            <span className={`${evolutionText} ${skeleton}`}>No.0000</span>
            <strong className={`${evolutionPokemon} ${skeleton}`}>포켓몬 이름</strong>
          </div>
        </li>
        <li>
          <div className={evolutionCard}>
            <div className={`${evolutionImage} ${skeleton}`} />
            <span className={`${evolutionText} ${skeleton}`}>No.0000</span>
            <strong className={`${evolutionPokemon} ${skeleton}`}>포켓몬 이름</strong>
          </div>
        </li>
        <li>
          <div className={evolutionCard}>
            <div className={`${evolutionImage} ${skeleton}`} />
            <span className={`${evolutionText} ${skeleton}`}>No.0000</span>
            <strong className={`${evolutionPokemon} ${skeleton}`}>포켓몬 이름</strong>
          </div>
        </li>
      </ul>
    </div>
  );
}
