'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';

import { fetchPokemonDetail } from '@/api/pokemon';
import {
  evolutionList,
  infoContent,
  pokemonName
} from '@/app/[id]/_components/detail-content/index.css';
import Badges from '@/components/common/badges';
import Section from '@/components/layouts/section';
import { POKEMON_DETAIL_QUERY_KEY } from '@/constants/pokemons';
import { usePokemonsContext } from '@/stores/pokemons';

export default function DetailContent() {
  const { id } = useParams();
  const { total } = usePokemonsContext();

  const { data, isError } = useQuery({
    queryKey: POKEMON_DETAIL_QUERY_KEY(id),
    queryFn: fetchPokemonDetail,
    enabled: !!id
  });

  // TODO: 에러 & 로딩 처리
  if (!id || isError) return notFound();
  if (!data) return null;

  console.log(data);
  // TODO: 상세 페이지 UI 작업
  return (
    <>
      <Section title="기본 정보">
        <div className={infoContent}>
          <div>
            <Image
              src={data.image}
              alt={data.name}
              width="500"
              height="500"
            />
          </div>
          <div>
            <div>No.{data.id.toString().padStart(total.toString().length, '0')}</div>
            <h3 className={pokemonName}>{data.name}</h3>
            <dl>
              <dt>특성</dt>
              <dd>
                <ul>
                  {data.abilities.map(({ name, isHidden, description }) => (
                    <li key={name}>
                      <span>
                        {name} {isHidden && '(숨겨진)'}
                      </span>
                      <p>{description}</p>
                    </li>
                  ))}
                </ul>
              </dd>
              <dt>키</dt>
              <dd>{data.height}m</dd>
              <dt>몸무게</dt>
              <dd>{data.weight}kg</dd>
              <dt>성별</dt>
              <dd>{data.genders.length > 0 ? data.genders.join(', ') : '불명'}</dd>
              <dt>타입</dt>
              <dd>
                <Badges badges={data.types} />
              </dd>
              <dt>분류</dt>
              <dd>{data.genus}</dd>
              <dt>설명</dt>
              <dd>{data.description}</dd>
            </dl>
          </div>
        </div>
      </Section>
      <Section title="진화 단계">
        <ul className={evolutionList}>
          {data.evolutionChain.map(evolution => (
            <li key={evolution.id}>
              <Link href={`/pokemon/${evolution.id}`}>
                <div>{evolution.stage}단계</div>
                <Image
                  src={evolution.image}
                  alt={evolution.name}
                  width="100"
                  height="100"
                />
                <div>{evolution.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <ul>
          {data.prevId && (
            <li>
              <Link href={`/${data.prevId}`}>
                No. {data.prevId.toString().padStart(total.toString().length, '0')}
                이전 포켓몬
              </Link>
            </li>
          )}
          <li>
            <Link href="/">목록으로</Link>
          </li>
          {data.nextId && (
            <li>
              <Link href={`/${data.nextId}`}>
                No. {data.nextId.toString().padStart(total.toString().length, '0')}
                다음 포켓몬
              </Link>
            </li>
          )}
        </ul>
      </Section>
    </>
  );
}
