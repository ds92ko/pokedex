'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Fragment } from 'react';
import {
  BiChevronRight,
  BiFemaleSign,
  BiLink,
  BiLock,
  BiMaleSign,
  BiQuestionMark,
  BiShareAlt
} from 'react-icons/bi';

import { fetchPokemonDetail } from '@/api/pokemon';
import { POKEMON_NAV_IMAGE_SIZE } from '@/app/[id]/_components/detail-content/constants';
import {
  buttonGroup,
  descriptionDetails,
  descriptionList,
  descriptionTerm,
  evolutionCard,
  evolutionImage,
  evolutionItem,
  evolutionList,
  evolutionPokemon,
  evolutionSeparator,
  evolutionText,
  imageBox,
  infoContent,
  pokemonAbility,
  pokemonDescription,
  pokemonImage,
  pokemonName,
  pokemonNavItem,
  pokemonNavLink,
  pokemonNavLinkImage,
  pokemonNavLinkSpan,
  pokemonNavLinkText,
  pokemonNavList,
  pokemonNumber,
  textBox
} from '@/app/[id]/_components/detail-content/index.css';
import Badges from '@/components/common/badges';
import Pokeball from '@/components/common/pokeball';
import Tooltip from '@/components/common/tooltip';
import Section from '@/components/layouts/section';
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

export default function DetailContent() {
  const { id } = useParams();
  const { total } = usePokemonsContext();

  const { data } = useSuspenseQuery({
    queryKey: POKEMON_DETAIL_QUERY_KEY(id),
    queryFn: fetchPokemonDetail
  });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${data.name} | Pokédex`,
          text: data.description,
          url: window.location.href
        });
      } catch (err) {
        console.warn('공유 취소 또는 실패:', err);
        alert('공유에 실패했습니다. 다시 시도해주세요.');
      }
    } else {
      alert('이 브라우저는 공유 기능을 지원하지 않습니다.');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다.');
    } catch (err) {
      console.log(err);
      alert('링크 복사에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      <Section
        title="기본 정보"
        titleContent={
          <div className={buttonGroup}>
            <button
              type="button"
              className={button.sm}
              aria-label="공유하기"
              onClick={handleShare}
            >
              <BiShareAlt size={icons.size.sm} />
              공유
            </button>
            <button
              type="button"
              className={button.sm}
              aria-label="링크 복사하기"
              onClick={handleCopyLink}
            >
              <BiLink size={icons.size.sm} />
              복사
            </button>
          </div>
        }
      >
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
                {data.name}
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
      </Section>
      <Section title="진화 단계">
        <ul className={evolutionList}>
          {data.evolutionChain.map((evolution, index) => (
            <Fragment key={evolution.id}>
              {!!index && (
                <li className={evolutionSeparator}>
                  <BiChevronRight size={icons.size.lg} />
                </li>
              )}
              <li className={evolutionItem}>
                <Link
                  className={`${evolutionCard} ${data.id === evolution.id ? 'current' : ''}`}
                  href={`/${evolution.id}`}
                >
                  <Image
                    className={evolutionImage}
                    src={evolution.image}
                    alt={evolution.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                  <span className={evolutionText}>
                    {!evolution.stage ? '기본형' : `${evolution.stage}차 진화`}
                  </span>
                  <strong className={evolutionPokemon}>{evolution.name}</strong>
                </Link>
              </li>
            </Fragment>
          ))}
        </ul>
      </Section>
      <Section>
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
                  <Pokeball size={POKEMON_NAV_IMAGE_SIZE} />
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
                  <Pokeball size={POKEMON_NAV_IMAGE_SIZE} />
                  <div className={pokemonNavLinkText}>
                    <span className={pokemonNavLinkSpan}>다음</span>
                    <strong>X</strong>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </Section>
    </>
  );
}
