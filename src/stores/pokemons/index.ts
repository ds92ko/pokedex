import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { STORE_VERSION } from '@/constants/stores';
import { initialPokemonsContext } from '@/stores/pokemons/constants';
import { PokemonsStore } from '@/stores/pokemons/types';

const usePokemonsStore = create<PokemonsStore>()(
  persist(
    set => ({
      context: initialPokemonsContext,
      actions: {
        setTotal: total =>
          set(({ context }) => ({
            context: { ...context, total }
          }))
      }
    }),
    {
      name: 'pokemons-store',
      version: STORE_VERSION,
      partialize: ({ context }) => ({ context }),
      migrate: (persistedState, version) => {
        if (version < STORE_VERSION) {
          return { context: initialPokemonsContext };
        }
        return persistedState;
      }
    }
  )
);

export const usePokemonsContext = () => usePokemonsStore(state => state.context);
export const usePokemonsActions = () => usePokemonsStore(state => state.actions);
