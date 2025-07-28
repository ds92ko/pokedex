import ControlBar from '@/app/favorites/_components/control-bar';
import FavoriteList from '@/app/favorites/_components/favorite-list';
import Section from '@/components/layouts/section';

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
