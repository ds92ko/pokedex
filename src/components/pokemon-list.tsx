'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

import { fetchPokemonList, POKEMON_LIST_LIMIT, POKEMON_LIST_QUERY_KEY } from '@/api/pokemon';

export default function PokemonList() {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: POKEMON_LIST_QUERY_KEY,
    queryFn: fetchPokemonList,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextOffset = allPages.length * POKEMON_LIST_LIMIT;
      return nextOffset < lastPage.count ? nextOffset : undefined;
    }
  });

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) fetchNextPage();
    });

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div>
      <h2>Pokemon List</h2>
      <ul>
        {data?.pages.flatMap((page, pageIndex) =>
          page.results.map((pokemon, idx) => (
            <li key={`${pokemon.name}-${pageIndex}-${idx}`}>{pokemon.name}</li>
          ))
        )}
      </ul>
      <div
        ref={observerRef}
        style={{ height: 20 }}
      />
      {isFetchingNextPage && <p>Loading more...</p>}
    </div>
  );
}
