import { Suspense } from 'react';

import { fetchPokemonList } from '@/api/pokemon';
import PokemonList from '@/app/_components/pokemon-list';
import PokemonListSkeleton from '@/app/_components/pokemon-list/skeleton';
import Section from '@/components/layouts/section';
import { PrefetchInfiniteBoundary } from '@/components/query-boundary/prefetch-infinite';
import { POKEMON_LIST_QUERY_KEY } from '@/constants/pokemons';

export default async function ListPage() {
  return (
    <Section title="포켓몬 도감">
      <Suspense fallback={<PokemonListSkeleton />}>
        <PrefetchInfiniteBoundary
          options={{
            queryKey: POKEMON_LIST_QUERY_KEY,
            queryFn: fetchPokemonList,
            initialPageParam: 0
          }}
        >
          <PokemonList />
        </PrefetchInfiniteBoundary>
      </Suspense>
    </Section>
  );
}
