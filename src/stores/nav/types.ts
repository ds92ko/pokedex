export interface NavStore {
  context: {
    open: boolean;
  };
  actions: {
    openNav: () => void;
    closeNav: () => void;
    toggleNav: () => void;
  };
}
