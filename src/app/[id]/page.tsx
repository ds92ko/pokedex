import { Suspense } from 'react';

import { fetchPokemonDetail } from '@/api/pokemon';
import DetailContent from '@/app/[id]/_components/detail-content';
import { PrefetchBoundary } from '@/components/query-boundary/prefetch';
import { POKEMON_DETAIL_QUERY_KEY } from '@/constants/pokemons';

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PrefetchBoundary
        options={{
          queryKey: POKEMON_DETAIL_QUERY_KEY(id),
          queryFn: fetchPokemonDetail
        }}
      >
        <DetailContent />
      </PrefetchBoundary>
    </Suspense>
  );
}
