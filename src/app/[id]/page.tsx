import { Metadata } from 'next';
import { Suspense } from 'react';

import {
  fetchPokemonDetail,
  fetchPokemonEvolution,
  fetchPokemonMetadata,
  fetchPokemonNeighbor
} from '@/api/pokemon';
import PokemonEvolution from '@/app/[id]/_components/pokemon-evolution';
import PokemonEvolutionSkeleton from '@/app/[id]/_components/pokemon-evolution/skeleton';
import PokemonNavigation from '@/app/[id]/_components/pokemon-nevigation';
import PokemonNavigationSkeleton from '@/app/[id]/_components/pokemon-nevigation/skeleton';
import PokemonProfile from '@/app/[id]/_components/pokemon-profile';
import PokemonProfileSkeleton from '@/app/[id]/_components/pokemon-profile/skeleton';
import ShareButtonGroup from '@/app/[id]/_components/share-button-group';
import { openGraph, twitter } from '@/app/metadata';
import Section from '@/components/layouts/section';
import { PrefetchBoundary } from '@/components/query-boundary/prefetch';
import {
  POKEMON_DETAIL_QUERY_KEY,
  POKEMON_EVOLUTION_QUERY_KEY,
  POKEMON_NEIGHBOR_QUERY_KEY
} from '@/constants/pokemons';
import { SITE_URL } from '@/constants/routes';

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const { title, description } = await fetchPokemonMetadata(id);
  const url = `${SITE_URL}/${id}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      ...openGraph,
      title,
      description,
      url
    },
    twitter: {
      ...twitter,
      title,
      description
    }
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params;

  return (
    <>
      <Section
        title="기본 정보"
        titleContent={<ShareButtonGroup id={id} />}
      >
        <Suspense fallback={<PokemonProfileSkeleton />}>
          <PrefetchBoundary
            options={{
              queryKey: POKEMON_DETAIL_QUERY_KEY(id),
              queryFn: fetchPokemonDetail
            }}
          >
            <PokemonProfile />
          </PrefetchBoundary>
        </Suspense>
      </Section>
      <Section title="진화 단계">
        <Suspense fallback={<PokemonEvolutionSkeleton />}>
          <PrefetchBoundary
            options={{
              queryKey: POKEMON_EVOLUTION_QUERY_KEY(id),
              queryFn: fetchPokemonEvolution
            }}
          >
            <PokemonEvolution />
          </PrefetchBoundary>
        </Suspense>
      </Section>
      <Section>
        <Suspense fallback={<PokemonNavigationSkeleton />}>
          <PrefetchBoundary
            options={{
              queryKey: POKEMON_NEIGHBOR_QUERY_KEY(id),
              queryFn: fetchPokemonNeighbor
            }}
          >
            <PokemonNavigation />
          </PrefetchBoundary>
        </Suspense>
      </Section>
    </>
  );
}
