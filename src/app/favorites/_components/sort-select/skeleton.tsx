import { DEFAULT_SORT, SORT_OPTIONS } from '@/app/favorites/_components/sort-select/constants';
import Select from '@/components/common/select';

export default function SortSelectSkeleton() {
  return (
    <Select
      options={SORT_OPTIONS}
      placeholder="정렬 선택"
      selected={DEFAULT_SORT}
      disabled
    />
  );
}
