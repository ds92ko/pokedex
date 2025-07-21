export interface SearchHistory {
  id: string;
  image: string;
  value: string;
}

export interface SearchStore {
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
