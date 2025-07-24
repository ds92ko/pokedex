import { EvolutionChain } from '@/type/pokemons';

export interface PositionedEvolution extends EvolutionChain {
  gridColumn: number;
  gridRow: number;
}
