'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { DEFAULT_SORT, SORT_OPTIONS } from '@/app/favorites/_components/sort-select/constants';
import Select from '@/components/common/select';
import { useFavoritesContext } from '@/stores/favorites';

export default function SortSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selected = searchParams.get('sort') || DEFAULT_SORT;
  const { favorites } = useFavoritesContext();

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', value);

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Select
      options={SORT_OPTIONS}
      placeholder="정렬 선택"
      selected={selected}
      onChange={handleChange}
      disabled={!favorites.length}
    />
  );
}
