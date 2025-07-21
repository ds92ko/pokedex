export interface PokemonsStore {
  context: {
    total: number;
  };
  actions: {
    setTotal: (total: number) => void;
  };
}
