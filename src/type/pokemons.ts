import { QueryFunction } from '@tanstack/react-query';

import {
  POKEMON_DETAIL_QUERY_KEY,
  POKEMON_EVOLUTION_QUERY_KEY,
  POKEMON_LIST_QUERY_KEY,
  POKEMON_NEIGHBOR_QUERY_KEY
} from '@/constants/pokemons';

// PokeAPI
export interface PokeApiListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokeApiDetailResponse {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: PokemonTypeKey;
      url: string;
    };
  }[];
  sprites: {
    [key: string]: string | null;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  species: {
    name: string;
    url: string;
  };
}

export type GenderRate = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface PokeApiSpeciesResponse {
  id: number;
  name: string;
  color: {
    name: string;
    url: string;
  };
  flavor_text_entries: {
    flavor_text: string;
    language: { name: string };
    version: { name: string };
  }[];
  gender_rate: GenderRate;
  genera: {
    genus: string;
    language: { name: string };
  }[];
  names: {
    name: string;
    language: { name: string };
  }[];
  evolution_chain: {
    url: string;
  };
  is_legendary: boolean;
  is_mythical: boolean;
  generation: {
    name: string;
  };
}

export interface PokeAPITypeResponse {
  id: number;
  name: string;
  damage_relations: {
    double_damage_from: { name: string; url: string }[];
    double_damage_to: { name: string; url: string }[];
    half_damage_from: { name: string; url: string }[];
    half_damage_to: { name: string; url: string }[];
    no_damage_from: { name: string; url: string }[];
    no_damage_to: { name: string; url: string }[];
  };
  game_indices: {
    game_index: number;
    generation: { name: string; url: string };
  }[];
  generation: {
    name: string;
    url: string;
  };
  move_damage_class: {
    name: string;
    url: string;
  } | null;
  moves: {
    name: string;
    url: string;
  }[];
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  pokemon: {
    slot: number;
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}

export interface PokeApiAbilityResponse {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: {
    name: string;
    url: string;
  };
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  effect_entries: {
    effect: string;
    short_effect: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
  pokemon: {
    is_hidden: boolean;
    slot: number;
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}

export interface PokeAPIEvolutionChain {
  is_baby: boolean;
  species: {
    name: string;
    url: string;
  };
  evolution_details: {
    item: { name: string; url: string } | null;
    trigger: { name: string; url: string } | null;
    gender: number | null;
    held_item: { name: string; url: string } | null;
    known_move: { name: string; url: string } | null;
    known_move_type: { name: string; url: string } | null;
    location: { name: string; url: string } | null;
    min_affection: number | null;
    min_beauty: number | null;
    min_happiness: number | null;
    min_level: number | null;
    needs_overworld_rain: boolean;
    party_species: { name: string; url: string } | null;
    party_type: { name: string; url: string } | null;
    relative_physical_stats: number | null;
    time_of_day: string;
    trade_species: { name: string; url: string } | null;
    turn_upside_down: boolean;
  }[];
  evolves_to: PokeAPIEvolutionChain[];
}

export interface PokeAPIEvolutionChainResponse {
  id: number;
  baby_trigger_item: {
    name: string;
    url: string;
  } | null;
  chain: PokeAPIEvolutionChain;
}

// Next API Route에서 사용하는 타입 정의
export interface PokemonResultResponse {
  id: number;
  isLegendary: boolean;
  isMythical: boolean;
  name: string;
  genus: string;
  description: string;
  image: string;
}

export interface PokemonListResponse {
  count: number;
  results: PokemonResultResponse[];
}

export type FetchPokemonList = QueryFunction<PokemonListResponse, typeof POKEMON_LIST_QUERY_KEY>;

export interface EvolutionChain {
  id: number;
  name: string;
  stage: number;
  image: string;
}

export type PokemonTypeKey =
  | 'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy';

export type PokemonType = {
  key: PokemonTypeKey;
  name: string;
};

export type PokemonAbility = {
  name: string;
  isHidden: boolean;
  description: string;
};

export type Gender = 'F' | 'M';

export type NeighboringPokemon = {
  id: number;
  name: string;
  image: string;
} | null;

export interface PokemonDetailResponse {
  id: number;
  name: string;
  types: PokemonType[];
  abilities: PokemonAbility[];
  isLegendary: boolean;
  isMythical: boolean;
  genus: string;
  genders: Gender[];
  height: number;
  weight: number;
  description: string;
  evolutionChain: EvolutionChain[];
  image: string;
  prev: NeighboringPokemon;
  next: NeighboringPokemon;
}

export type FetchPokemonDetail = QueryFunction<
  PokemonDetailResponse,
  ReturnType<typeof POKEMON_DETAIL_QUERY_KEY>
>;

export interface EvolutionChainResponse {
  id: number;
  evolutionChain: EvolutionChain[];
}

export type FetchPokemonEvolution = QueryFunction<
  EvolutionChainResponse,
  ReturnType<typeof POKEMON_EVOLUTION_QUERY_KEY>
>;

export interface NeighboringPokemonResponse {
  id: number;
  prev: NeighboringPokemon;
  next: NeighboringPokemon;
}

export type FetchPokemonNeighbor = QueryFunction<
  NeighboringPokemonResponse,
  ReturnType<typeof POKEMON_NEIGHBOR_QUERY_KEY>
>;
