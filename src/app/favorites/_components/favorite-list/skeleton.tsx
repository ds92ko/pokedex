import FavoriteItemsSkeleton from '@/app/favorites/_components/favorite-item/skeleton';
import { favoriteList } from '@/app/favorites/_components/favorite-list/index.css';

export default function FavoriteListSkeleton() {
  return (
    <ul className={favoriteList}>
      <FavoriteItemsSkeleton />
    </ul>
  );
}
