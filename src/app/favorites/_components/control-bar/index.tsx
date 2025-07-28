import { controlBar } from '@/app/favorites/_components/control-bar/index.css';
import ReleasePokemons from '@/app/favorites/_components/release-pokemons';
import SortSelect from '@/app/favorites/_components/sort-select';

export default function ControlBar() {
  return (
    <div className={controlBar}>
      <ReleasePokemons />
      <SortSelect />
    </div>
  );
}
