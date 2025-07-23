import PokemonItemsSkeleton from '@/app/_components/pokemon-item/skeleton';
import { pokemonList } from '@/app/_components/pokemon-list/index.css';

export default function PokemonListSkeleton() {
  return (
    <ul className={pokemonList}>
      <PokemonItemsSkeleton />
    </ul>
  );
}
