import { create } from 'zustand';

import { NavStore } from '@/stores/nav/types';

const useNavStore = create<NavStore>(set => ({
  context: {
    open: false
  },
  actions: {
    openNav: () =>
      set(state => ({
        context: { ...state.context, open: true }
      })),
    closeNav: () =>
      set(state => ({
        context: { ...state.context, open: false }
      })),
    toggleNav: () =>
      set(state => ({
        context: { ...state.context, open: !state.context.open }
      }))
  }
}));

export const useNavContext = () => useNavStore(state => state.context);
export const useNavActions = () => useNavStore(state => state.actions);
