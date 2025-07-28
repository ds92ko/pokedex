import FavoriteList from '@/app/favorites/_components/favorite-list';
import Section from '@/components/layouts/section';

export default function FavoritesPage() {
  return (
    <Section title="Favorites">
      <FavoriteList />
    </Section>
  );
}
