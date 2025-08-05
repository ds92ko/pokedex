'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';

import Datalist from '@/components/common/datalist';
import { DatalistOption } from '@/components/common/datalist/types';
import { searchForm } from '@/components/layouts/search/index.css';
import SearchHistory from '@/components/portals/search-history';
import { usePokemonsActions, usePokemonsContext } from '@/stores/pokemons';
import { useSearchActions, useSearchContext } from '@/stores/search';
import { SelectedOption } from '@/stores/search/types';
import { icons } from '@/styles/vars.css';
import pokemonNames from '@public/data/pokemon-name.json';

export default function Search() {
  const router = useRouter();
  const { total } = usePokemonsContext();
  const { setTotal } = usePokemonsActions();
  const inputRef = useRef<HTMLInputElement>(null);

  const { keyword, selected, open } = useSearchContext();
  const { setKeyword, openSearch, closeSearch, addHistory } = useSearchActions();

  const searchPokemon = (selected: SelectedOption) => {
    if (!selected.id) return;
    addHistory(selected);
    router.push(`/${selected.id}`);
    closeSearch();
    inputRef.current?.blur();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPokemon(selected);
  };

  const handleChange = (keyword: string, option: DatalistOption) => {
    setKeyword(keyword, {
      id: option.value,
      name: option.label
    });
  };

  const handleSelect = (option: DatalistOption) => {
    setKeyword(option.label, {
      id: option.value,
      name: option.label
    });
    searchPokemon({ id: option.value, name: option.label });
  };

  useEffect(() => {
    if (!total || total !== pokemonNames.length) setTotal(pokemonNames.length);
  }, [total, setTotal]);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!inputRef.current || inputRef.current.contains(target) || target.closest('button'))
        return;
      closeSearch();
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [inputRef, closeSearch]);

  return (
    <form
      className={searchForm[open ? 'open' : 'close']}
      onSubmit={handleSubmit}
    >
      <Datalist
        ref={inputRef}
        start={<BiSearch size={icons.size.md} />}
        type="search"
        placeholder={open ? '포켓몬 이름 혹은 도감 번호를 검색하세요.' : 'Search'}
        value={keyword}
        onChange={handleChange}
        onSelect={handleSelect}
        onFocus={openSearch}
        options={pokemonNames.map(pokemon => ({
          value: pokemon.id.toString(),
          label: pokemon.name
        }))}
      />
      <SearchHistory />
    </form>
  );
}
