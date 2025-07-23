'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

import { fetchPokemonList } from '@/api/pokemon';
import PokemonItem from '@/app/_components/pokemon-item';
import PokemonItemSkeleton from '@/app/_components/pokemon-item/skeleton';
import { pokemonList } from '@/app/_components/pokemon-list/index.css';
import { POKEMON_LIST_LIMIT, POKEMON_LIST_QUERY_KEY } from '@/constants/pokemons';
import { usePokemonsActions, usePokemonsContext } from '@/stores/pokemons';

export default function PokemonList() {
  const { total } = usePokemonsContext();
  const { setTotal } = usePokemonsActions();
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: POKEMON_LIST_QUERY_KEY,
    queryFn: fetchPokemonList,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextOffset = allPages.length * POKEMON_LIST_LIMIT;
      return nextOffset < lastPage.count ? nextOffset : undefined;
    }
  });

  if (data?.pages[0].count && !total) setTotal(data?.pages[0].count);

  const observerRef = useRef<HTMLDivElement | null>(null);

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
        {isFetchingNextPage &&
          Array(POKEMON_LIST_LIMIT)
            .fill('pokemon-item-skeleton')
            .map((val, idx) => <PokemonItemSkeleton key={`${val}-${idx}`} />)}
      </ul>
      <div ref={observerRef} />
    </>
  );
}
