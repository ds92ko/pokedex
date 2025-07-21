'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';

import { fetchPokemonDetail } from '@/api/pokemon';
import Badges from '@/components/common/badges';
import Section from '@/components/layouts/section';
import { POKEMON_DETAIL_QUERY_KEY } from '@/constants/pokemons';
import { usePokemonsContext } from '@/stores/pokemons';

export default function Content() {
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
        <div>No.{data.id.toString().padStart(total.toString().length, '0')}</div>
        <Image
          src={data.image}
          alt={data.name}
          width="500"
          height="500"
        />
        <div>{data.name}</div>
        <Badges badges={data.types} />
        <div>{data.genus}</div>
        <div>{data.description}</div>
      </Section>
      <Section title="진화 단계">
        {data.evolutionChain.length > 0 ? (
          <ul>
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
        ) : (
          <div>진화 단계가 없습니다.</div>
        )}
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
