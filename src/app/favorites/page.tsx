import { Metadata } from 'next';
import { Suspense } from 'react';

import ControlBar from '@/app/favorites/_components/control-bar';
import FavoriteList from '@/app/favorites/_components/favorite-list';
import FavoriteListSkeleton from '@/app/favorites/_components/favorite-list/skeleton';
import { openGraph, twitter } from '@/app/metadata';
import Section from '@/components/layouts/section';

const title = '포획한 포켓몬';
const description = 'Pokédex에서 포획한 나만의 포켓몬 목록을 확인하세요!';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    ...openGraph,
    title,
    description
  },
  twitter: {
    ...twitter,
    title,
    description
  }
};

export default function FavoritesPage() {
  return (
    <Section
      title="포획한 포켓몬"
      titleContent={<ControlBar />}
    >
      <Suspense fallback={<FavoriteListSkeleton />}>
        <FavoriteList />
      </Suspense>
    </Section>
  );
}
