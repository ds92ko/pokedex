import FavoriteList from '@/app/favorites/_components/favorite-list';
import SortSelect from '@/app/favorites/_components/sort-select';
import Section from '@/components/layouts/section';

export default function FavoritesPage() {
  return (
    <Section
      title="포획한 포켓몬"
      titleContent={<SortSelect />}
    >
      <FavoriteList />
    </Section>
  );
}
