import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { fetchPokemonList } from '@/api/pokemon';
import PokemonList from '@/components/pokemon-list';
import { POKEMON_LIST_QUERY_KEY } from '@/constants/pokemons';
import { getQueryClient } from '@/lib/tanstack-query/get-query-client';

export default async function ListPage() {
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
