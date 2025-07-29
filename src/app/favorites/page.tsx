import { Metadata } from 'next';

import ControlBar from '@/app/favorites/_components/control-bar';
import FavoriteList from '@/app/favorites/_components/favorite-list';
import Section from '@/components/layouts/section';

export const metadata: Metadata = {
  title: '포획한 포켓몬',
  description: 'Pokédex에서 포획한 나만의 포켓몬 목록을 확인하세요.',
  openGraph: {
    title: '포획한 포켓몬',
    description: 'Pokédex에서 포획한 나만의 포켓몬 목록을 확인하세요.'
  }
};

export default function FavoritesPage() {
  return (
    <Section
      title="포획한 포켓몬"
      titleContent={<ControlBar />}
    >
      <FavoriteList />
    </Section>
  );
}
