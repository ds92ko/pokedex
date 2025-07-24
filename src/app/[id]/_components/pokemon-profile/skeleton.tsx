import {
  descriptionDetails,
  descriptionList,
  descriptionTerm,
  imageBox,
  infoContent,
  pokemonDescription,
  pokemonImage,
  pokemonName,
  pokemonNumber,
  textBox
} from '@/app/[id]/_components/pokemon-profile/index.css';
import Pokeball from '@/components/common/pokeball';
import { button } from '@/styles/actions.css';
import { skeleton } from '@/styles/skeleton.css';

export default function PokemonProfileSkeleton() {
  return (
    <div className={infoContent}>
      <div className={imageBox}>
        <div className={`${pokemonImage} ${skeleton}`} />
      </div>
      <div className={textBox}>
        <div>
          <span className={`${pokemonNumber} ${skeleton}`}>No.0000</span>
          <h3 className={pokemonName}>
            <span className={skeleton}>포켓몬 이름</span>
          </h3>
          <p className={`${pokemonDescription} ${skeleton}`}>포켓몬 설명</p>
        </div>
        <dl className={descriptionList}>
          <dt className={descriptionTerm}>분류</dt>
          <dd className={descriptionDetails}>
            <span className={skeleton}>포켓몬 분류</span>
          </dd>
          <dt className={descriptionTerm}>타입</dt>
          <dd className={descriptionDetails}>
            <span className={skeleton}>포켓몬 타입</span>
          </dd>
          <dt className={descriptionTerm}>특성</dt>
          <dd className={descriptionDetails}>
            <span className={skeleton}>포켓몬 특성</span>
          </dd>
          <dt className={descriptionTerm}>성별</dt>
          <dd className={descriptionDetails}>
            <span className={skeleton}>포켓몬 성별</span>
          </dd>
          <dt className={descriptionTerm}>키</dt>
          <dd className={descriptionDetails}>
            <span className={skeleton}>포켓몬 키</span>
          </dd>
          <dt className={descriptionTerm}>몸무게</dt>
          <dd className={descriptionDetails}>
            <span className={skeleton}>포켓몬 몸무게</span>
          </dd>
        </dl>
        <button
          type="button"
          className={button.lg}
          style={{ width: '100%' }}
          disabled
        >
          <Pokeball size={30} />
          몬스터볼 던지기
        </button>
      </div>
    </div>
  );
}
