import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { POKEMON_IMAGE_BASE_URL } from '@/constants/api';
import { SearchStore } from '@/stores/search/types';

const useSearchStore = create<SearchStore>()(
  persist(
    set => ({
      context: {
        value: '',
        open: false,
        history: []
      },
      actions: {
        setValue: value =>
          set(({ context }) => ({
            context: { ...context, value }
          })),
        openSearch: () =>
          set(({ context }) => ({
            context: { ...context, open: true }
          })),
        closeSearch: () =>
          set(({ context }) => ({
            context: { ...context, value: '', open: false }
          })),
        addHistory: value =>
          set(({ context }) => {
            const existing = context.history.find(h => h.value === value);

            return {
              context: {
                ...context,
                history: existing
                  ? [existing, ...context.history.filter(h => h.value !== value)]
                  : [
                      {
                        id: uuidv4(),
                        image: `${POKEMON_IMAGE_BASE_URL}/${value}.png`,
                        value
                      },
                      ...context.history
                    ]
              }
            };
          }),
        removeHistory: id =>
          set(({ context }) => ({
            context: {
              ...context,
              history: id ? context.history.filter(h => h.id !== id) : []
            }
          }))
      }
    }),
    {
      name: 'search-history-store',
      partialize: ({ context }) => ({ context })
    }
  )
);

export const useSearchContext = () => useSearchStore(state => state.context);
export const useSearchActions = () => useSearchStore(state => state.actions);
