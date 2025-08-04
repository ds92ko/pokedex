interface SelectedOption {
  id: string;
  name: string;
}

export interface SearchHistory extends SelectedOption {
  image: string;
}

export interface SearchStore {
  context: {
    open: boolean;
    keyword: string;
    selected: { id: string; name: string };
    history: SearchHistory[];
  };
  actions: {
    setKeyword: (keyword: string, selected: SelectedOption) => void;
    openSearch: () => void;
    closeSearch: () => void;
    addHistory: (selected: SelectedOption) => void;
    removeHistory: (id?: SearchHistory['id']) => void;
  };
}
