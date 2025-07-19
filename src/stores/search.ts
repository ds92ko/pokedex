import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SearchHistory {
  id: string;
  image: string;
  value: string;
}

interface SearchStore {
  context: {
    value: string;
    open: boolean;
    history: SearchHistory[];
  };
  actions: {
    setValue: (value: string) => void;
    openSearch: () => void;
    closeSearch: () => void;
    addHistory: (value: SearchHistory['value']) => void;
    removeHistory: (id?: SearchHistory['id']) => void;
  };
}

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
          set(({ context }) => ({
            context: {
              ...context,
              history: [
                {
                  id: uuidv4(),
                  image: `${process.env.NEXT_PUBLIC_POKEMON_IMAGE_URL}/${value}.png`,
                  value
                },
                ...context.history
              ]
            }
          })),
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
