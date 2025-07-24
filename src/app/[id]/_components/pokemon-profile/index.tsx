'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { BiFemaleSign, BiLock, BiMaleSign, BiQuestionMark } from 'react-icons/bi';

import { fetchPokemonDetail } from '@/api/pokemon';
import {
  descriptionDetails,
  descriptionList,
  descriptionTerm,
  imageBox,
  infoContent,
  pokemonAbility,
  pokemonDescription,
  pokemonImage,
  pokemonName,
  pokemonNumber,
  textBox
} from '@/app/[id]/_components/pokemon-profile/index.css';
import Badges from '@/components/common/badges';
import Pokeball from '@/components/common/pokeball';
import Tooltip from '@/components/common/tooltip';
import { POKEMON_DETAIL_QUERY_KEY } from '@/constants/pokemons';
import { usePokemonsContext } from '@/stores/pokemons';
import { button } from '@/styles/actions.css';
import { icons, vars } from '@/styles/vars.css';

const GenderIcon = {
  F: (
    <BiFemaleSign
      key="female"
      color={vars.colors.primary}
      size={icons.size.lg}
    />
  ),
  M: (
    <BiMaleSign
      key="male"
      color={vars.colors.accent}
      size={icons.size.lg}
    />
  )
};

export default function PokemonProfile() {
  const { id } = useParams();
  const { total } = usePokemonsContext();

  const { data } = useSuspenseQuery({
    queryKey: POKEMON_DETAIL_QUERY_KEY(id),
    queryFn: fetchPokemonDetail
  });

  return (
    <div className={infoContent}>
      <div
        className={`${imageBox} ${data.isLegendary ? 'legendary' : data.isMythical ? 'mythical' : ''}`}
      >
        <Image
          className={pokemonImage}
          src={data.image}
          alt={data.name}
          fill
          sizes="100%"
          priority
        />
      </div>
      <div className={textBox}>
        <div>
          <span className={pokemonNumber}>
            No.{data.id.toString().padStart(total.toString().length, '0')}
          </span>
          <h3 className={pokemonName}>
            <span>{data.name}</span>
            {(data.isLegendary || data.isMythical) && (
              <Badges
                badges={[
                  ...(data.isLegendary
                    ? [{ kind: 'category', key: 'legendary', name: '전설의 포켓몬' } as const]
                    : []),
                  ...(data.isMythical
                    ? [{ kind: 'category', key: 'mythical', name: '환상의 포켓몬' } as const]
                    : [])
                ]}
              />
            )}
          </h3>
          <p className={pokemonDescription}>{data.description}</p>
        </div>
        <dl className={descriptionList}>
          <dt className={descriptionTerm}>분류</dt>
          <dd className={descriptionDetails}>{data.genus}</dd>
          <dt className={descriptionTerm}>타입</dt>
          <dd className={descriptionDetails}>
            <Badges badges={data.types} />
          </dd>
          <dt className={descriptionTerm}>특성</dt>
          <dd className={descriptionDetails}>
            {data.abilities.map(({ name, isHidden, description }) => (
              <Tooltip
                key={name}
                content={`${isHidden ? '히든 특성' : '일반 특성'} | ${description}`}
              >
                <span className={pokemonAbility}>
                  {isHidden && (
                    <BiLock
                      color={vars.colors.secondary}
                      size={icons.size.sm}
                    />
                  )}
                  {name}
                </span>
              </Tooltip>
            ))}
          </dd>
          <dt className={descriptionTerm}>성별</dt>
          <dd className={descriptionDetails}>
            {data.genders.length > 0 ? (
              data.genders.map(gender => GenderIcon[gender])
            ) : (
              <BiQuestionMark
                color={vars.colors.secondary}
                size={icons.size.lg}
              />
            )}
          </dd>
          <dt className={descriptionTerm}>키</dt>
          <dd className={descriptionDetails}>{data.height}m</dd>
          <dt className={descriptionTerm}>몸무게</dt>
          <dd className={descriptionDetails}>{data.weight}kg</dd>
        </dl>
        <button
          type="button"
          className={button.lg}
          style={{ width: '100%' }}
        >
          <Pokeball size={30} />
          몬스터볼 던지기
          {/* {data.name}, 넌 내 거야! */}
        </button>
      </div>
    </div>
  );
}
