import { SortedFavorites } from '@/app/favorites/_components/favorite-list/types';

export const sortedFavorites: SortedFavorites = {
  dateDesc: favorites =>
    [...favorites].sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime()),
  dateAsc: favorites =>
    [...favorites].sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime()),
  idAsc: favorites => [...favorites].sort((a, b) => a.id - b.id),
  idDesc: favorites => [...favorites].sort((a, b) => b.id - a.id),
  nameAsc: favorites => [...favorites].sort((a, b) => a.name.localeCompare(b.name))
};
