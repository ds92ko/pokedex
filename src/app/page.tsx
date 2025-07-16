import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { fetchPokemonList, POKEMON_LIST_QUERY_KEY } from '@/api/pokemon';
import PokemonList from '@/components/pokemon-list';
import { getQueryClient } from '@/lib/tanstack-query/get-query-client';

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: POKEMON_LIST_QUERY_KEY,
    queryFn: fetchPokemonList,
    initialPageParam: 0
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PokemonList />
    </HydrationBoundary>
  );
}
