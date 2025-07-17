'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { fetchPokemonList } from '@/api/pokemon';
import { POKEMON_LIST_LIMIT, POKEMON_LIST_QUERY_KEY } from '@/constants/pokemons';

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
      <h2>포켓몬 도감</h2>
      <ul>
        {data?.pages.flatMap((page, pageIndex) =>
          page.results.map((pokemon, idx) => (
            <li key={`${pokemon.name}-${pageIndex}-${idx}`}>
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                width={120}
                height={120}
              />
              <span>No.{pokemon.id.toString().padStart(page.count.toString().length, '0')}</span>
              <h3>{pokemon.name}</h3>
              <p>{pokemon.genera}</p>
            </li>
          ))
        )}
      </ul>
      <div ref={observerRef} />
      {isFetchingNextPage && <p>Loading more...</p>}
    </div>
  );
}
