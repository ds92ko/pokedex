import { Suspense } from 'react';

import { fetchPokemonDetail, fetchPokemonEvolution, fetchPokemonNeighbor } from '@/api/pokemon';
import DetailContent from '@/app/[id]/_components/detail-content';
import PokemonProfile from '@/app/[id]/_components/pokemon-profile';
import ShareButtonGroup from '@/app/[id]/_components/share-button-group';
import Section from '@/components/layouts/section';
import { PrefetchBoundary } from '@/components/query-boundary/prefetch';
import {
  POKEMON_DETAIL_QUERY_KEY,
  POKEMON_EVOLUTION_QUERY_KEY,
  POKEMON_NEIGHBOR_QUERY_KEY
} from '@/constants/pokemons';

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params;

  return (
    <>
      <Section
        title="기본 정보"
        titleContent={<ShareButtonGroup id={id} />}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <PrefetchBoundary
            options={{
              queryKey: POKEMON_DETAIL_QUERY_KEY(id),
              queryFn: fetchPokemonDetail
            }}
          >
            <PokemonProfile />
          </PrefetchBoundary>
        </Suspense>
      </Section>
      <Suspense fallback={<div>Loading evolution...</div>}>
        <PrefetchBoundary
          options={{
            queryKey: POKEMON_EVOLUTION_QUERY_KEY(id),
            queryFn: fetchPokemonEvolution
          }}
        >
          <DetailContent />
        </PrefetchBoundary>
      </Suspense>
      <Suspense fallback={<div>Loading neighbors...</div>}>
        <PrefetchBoundary
          options={{
            queryKey: POKEMON_NEIGHBOR_QUERY_KEY(id),
            queryFn: fetchPokemonNeighbor
          }}
        >
          <DetailContent />
        </PrefetchBoundary>
      </Suspense>
    </>
  );
}
