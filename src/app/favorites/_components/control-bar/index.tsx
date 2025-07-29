import { Suspense } from 'react';

import { controlBar } from '@/app/favorites/_components/control-bar/index.css';
import ReleasePokemons from '@/app/favorites/_components/release-pokemons';
import SortSelect from '@/app/favorites/_components/sort-select';
import SortSelectSkeleton from '@/app/favorites/_components/sort-select/skeleton';

export default function ControlBar() {
  return (
    <div className={controlBar}>
      <ReleasePokemons />
      <Suspense fallback={<SortSelectSkeleton />}>
        <SortSelect />
      </Suspense>
    </div>
  );
}
