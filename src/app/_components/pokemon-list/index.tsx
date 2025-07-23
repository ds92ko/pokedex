'use client';

import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

import { fetchPokemonList } from '@/api/pokemon';
import PokemonItem from '@/app/_components/pokemon-item';
import PokemonItemsSkeleton from '@/app/_components/pokemon-item/skeleton';
import { pokemonList } from '@/app/_components/pokemon-list/index.css';
import { POKEMON_LIST_LIMIT, POKEMON_LIST_QUERY_KEY } from '@/constants/pokemons';
import { usePokemonsActions, usePokemonsContext } from '@/stores/pokemons';

export default function PokemonList() {
  const { total } = usePokemonsContext();
  const { setTotal } = usePokemonsActions();
  const observerRef = useRef<HTMLDivElement | null>(null);
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } = useSuspenseInfiniteQuery({
    queryKey: POKEMON_LIST_QUERY_KEY,
    queryFn: fetchPokemonList,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextOffset = allPages.length * POKEMON_LIST_LIMIT;
      return nextOffset < lastPage.count ? nextOffset : undefined;
    }
  });

  useEffect(() => {
    if (data?.pages[0].count && !total) setTotal(data?.pages[0].count);
  }, [data, setTotal, total]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) fetchNextPage();
    });

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <>
      <ul className={pokemonList}>
        {data?.pages.flatMap(({ count, results }) =>
          results.map(result => (
            <PokemonItem
              key={result.id}
              count={count}
              result={result}
            />
          ))
        )}
        {isFetchingNextPage && <PokemonItemsSkeleton />}
      </ul>
      <div ref={observerRef} />
    </>
  );
}
