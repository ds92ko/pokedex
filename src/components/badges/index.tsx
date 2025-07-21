import { badgeItem, badgeList } from '@/components/badges/index.css';
import { vars } from '@/styles/vars.css';
import { PokemonTypeKey } from '@/type/pokemons';

const BadgeIcon = {
  normal: '⚪️', // 노멀: 흰 원
  fire: '🔥', // 불
  water: '💧', // 물방울
  electric: '⚡️', // 전기
  grass: '🌿', // 풀
  ice: '❄️', // 눈송이
  fighting: '🥊', // 격투
  poison: '☠️', // 독
  ground: '🌍', // 지구/땅
  flying: '🕊️', // 새
  psychic: '🔮', // 수정구 (에스퍼 느낌)
  bug: '🐛', // 벌레
  rock: '🪨', // 바위
  ghost: '👻', // 유령
  dragon: '🐉', // 드래곤
  dark: '🌑', // 어둠
  steel: '⚙️', // 톱니바퀴
  fairy: '🧚‍♀️' // 요정
};

export default function Badges({ badges }: { badges: { key: PokemonTypeKey; name: string }[] }) {
  return (
    <ul className={badgeList}>
      {badges.map(({ key, name }) => (
        <li
          key={key}
          className={badgeItem}
          style={{
            color: vars.colors.type[key],
            background: vars.alpha.type[key],
            border: `2px solid ${vars.colors.type[key]}`
          }}
        >
          {BadgeIcon[key]} {name}
        </li>
      ))}
    </ul>
  );
}
