import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { fetchPokemonDetail } from '@/api/pokemon';
import Content from '@/app/[id]/_components/content';
import { POKEMON_DETAIL_QUERY_KEY } from '@/constants/pokemons';
import { getQueryClient } from '@/lib/tanstack-query/get-query-client';

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: POKEMON_DETAIL_QUERY_KEY(id),
    queryFn: fetchPokemonDetail
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Content />
    </HydrationBoundary>
  );
}
