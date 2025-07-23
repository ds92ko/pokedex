import { Suspense } from 'react';

import { fetchPokemonList } from '@/api/pokemon';
import PokemonItemsSkeleton from '@/app/_components/pokemon-item/skeleton';
import PokemonList from '@/app/_components/pokemon-list';
import { pokemonList } from '@/app/_components/pokemon-list/index.css';
import Section from '@/components/layouts/section';
import { PrefetchInfiniteBoundary } from '@/components/query-boundary/prefetch-infinite';
import { POKEMON_LIST_QUERY_KEY } from '@/constants/pokemons';

export default async function ListPage() {
  return (
    <Section title="포켓몬 목록">
      <Suspense
        fallback={
          <ul className={pokemonList}>
            <PokemonItemsSkeleton />
          </ul>
        }
      >
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
