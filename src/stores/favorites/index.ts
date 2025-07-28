import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { POKEMON_IMAGE_BASE_URL } from '@/constants/api';
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
                {
                  ...pokemon,
                  image: `${POKEMON_IMAGE_BASE_URL}/${pokemon.id}.png`,
                  category: pokemon.category,
                  datetime: new Date().toISOString()
                },
                ...state.context.favorites
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
        },
        clearFavorites: () => {
          set({ context: { favorites: [] } });
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
