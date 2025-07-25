import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { FavoritesStore } from '@/stores/favorites/types';

const useFavoritesStore = create<FavoritesStore>()(
  persist(
    set => ({
      context: {
        favorites: []
      },
      actions: {
        addFavorite: pokemon => {
          set(state => ({
            context: {
              favorites: [
                ...state.context.favorites,
                {
                  ...pokemon,
                  datetime: new Date().toISOString()
                }
              ]
            }
          }));
        },
        removeFavorite: id => {
          set(state => ({
            context: {
              favorites: state.context.favorites.filter(favorite => favorite.id !== id)
            }
          }));
        }
      }
    }),
    {
      name: 'favorites-store',
      partialize: ({ context }) => ({ context })
    }
  )
);

export const useFavoritesContext = () => useFavoritesStore(state => state.context);
export const useFavoritesActions = () => useFavoritesStore(state => state.actions);
