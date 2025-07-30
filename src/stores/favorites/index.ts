import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import {
  POKEMON_ANIMATED_IMAGE_BASE_URL,
  POKEMON_IMAGE_BASE_URL,
  POKEMON_PIXEL_IMAGE_BASE_URL
} from '@/constants/api';
import { FavoritesStore } from '@/stores/favorites/types';

const useFavoritesStore = create<FavoritesStore>()(
  persist(
    set => ({
      context: {
        favorites: null
      },
      actions: {
        addFavorite: pokemon => {
          set(state => {
            const currentFavorites = state.context.favorites || [];

            return {
              context: {
                favorites: [
                  {
                    ...pokemon,
                    image: `${POKEMON_IMAGE_BASE_URL}/${pokemon.id}.png`,
                    animatedImage: `${POKEMON_ANIMATED_IMAGE_BASE_URL}/${pokemon.id}.gif`,
                    pixelImage: `${POKEMON_PIXEL_IMAGE_BASE_URL}/${pokemon.id}.png`,
                    datetime: new Date().toISOString()
                  },
                  ...currentFavorites
                ]
              }
            };
          });
        },
        removeFavorite: id => {
          set(state => ({
            context: {
              favorites: (state.context.favorites || []).filter(favorite => favorite.id !== id)
            }
          }));
        },
        clearFavorites: () => {
          set({ context: { favorites: [] } });
        },
        initializeFavorites: () => {
          set(state => ({
            context: {
              favorites: state.context.favorites ?? []
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
