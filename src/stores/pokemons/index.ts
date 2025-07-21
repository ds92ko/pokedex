import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { PokemonsStore } from '@/stores/pokemons/types';

const usePokemonsStore = create<PokemonsStore>()(
  persist(
    set => ({
      context: {
        total: 0
      },
      actions: {
        setTotal: total =>
          set(({ context }) => ({
            context: { ...context, total }
          }))
      }
    }),
    {
      name: 'pokemons-store',
      partialize: ({ context }) => ({ context })
    }
  )
);

export const usePokemonsContext = () => usePokemonsStore(state => state.context);
export const usePokemonsActions = () => usePokemonsStore(state => state.actions);
