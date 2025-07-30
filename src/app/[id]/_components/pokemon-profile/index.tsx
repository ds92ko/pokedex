'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
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
import { releaseMessage } from '@/constants/favorite';
import { POKEMON_DETAIL_QUERY_KEY } from '@/constants/pokemons';
import { useDialogActions } from '@/stores/dialog';
import { useFavoritesActions, useFavoritesContext } from '@/stores/favorites';
import { usePokemonsContext } from '@/stores/pokemons';
import { button } from '@/styles/actions.css';
import { icons, vars } from '@/styles/vars.css';
import { postposition } from '@/utils/postposition';

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
  const { openAlert, openConfirm } = useDialogActions();
  const { favorites } = useFavoritesContext();
  const { addFavorite, removeFavorite } = useFavoritesActions();
  const router = useRouter();

  const { data } = useSuspenseQuery({
    queryKey: POKEMON_DETAIL_QUERY_KEY(id),
    queryFn: fetchPokemonDetail
  });

  const isFavorite =
    Array.isArray(favorites) && favorites.some(favorite => favorite.id === data.id);

  const releasePokemon = async () => {
    const confirmed = await openConfirm({
      title: `${postposition(data.name, '과')} 작별하기`,
      content: releaseMessage[Math.floor(Math.random() * releaseMessage.length)],
      cancelLabel: '다시 생각하기',
      confirmLabel: '놓아주기'
    });

    if (!confirmed) return;
    removeFavorite(data.id);

    openAlert({
      title: `바이바이, ${data.name}!`,
      content: `${postposition(data.name, '이')} 떠났어요.`
    });
  };

  const catchPokemon = async () => {
    addFavorite({
      id: data.id,
      name: data.name,
      category: data.isLegendary ? 'legendary' : data.isMythical ? 'mythical' : null
    });
    const confirmed = await openConfirm({
      title: `${data.name}, 넌 내 거야!`,
      content: '방금 잡은 포켓몬을 확인하러 갈까요?',
      cancelLabel: '계속 도감보기',
      confirmLabel: '확인하러 가기'
    });

    if (!confirmed) return;
    router.push(`/favorites`);
  };

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
                content={`${isHidden ? '히든' : '일반'} 특성 | ${description}`}
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
          onClick={isFavorite ? releasePokemon : catchPokemon}
        >
          <Pokeball size={30} />
          {isFavorite ? '포켓몬 놓아주기' : '몬스터볼 던지기'}
        </button>
      </div>
    </div>
  );
}
