import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { POKEMON_IMAGE_BASE_URL } from '@/constants/api';
import { SearchStore } from '@/stores/search/types';

const useSearchStore = create<SearchStore>()(
  persist(
    set => ({
      context: {
        open: false,
        keyword: '',
        selected: {
          id: '',
          name: ''
        },
        history: []
      },
      actions: {
        setKeyword: (keyword, selected) =>
          set(({ context }) => ({
            context: { ...context, keyword, selected }
          })),
        openSearch: () =>
          set(({ context }) => ({
            context: { ...context, open: true }
          })),
        closeSearch: () =>
          set(({ context }) => ({
            context: { ...context, keyword: '', selected: { id: '', name: '' }, open: false }
          })),
        addHistory: selected =>
          set(({ context }) => {
            const existing = context.history.find(h => h.id === selected.id);

            return {
              context: {
                ...context,
                history: existing
                  ? [existing, ...context.history.filter(h => h.id !== selected.id)]
                  : [
                      {
                        id: selected.id,
                        image: `${POKEMON_IMAGE_BASE_URL}/${selected.id}.png`,
                        name: selected.name
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
