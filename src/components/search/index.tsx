'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { BiSearch } from 'react-icons/bi';

import Input from '@/components/input';
import History from '@/components/search/history';
import { searchBar, searchForm } from '@/components/search/index.css';
import { usePokemonsContext } from '@/stores/pokemons';
import { useSearchActions, useSearchContext } from '@/stores/search';
import { icons } from '@/styles/vars.css';

export default function Search() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const { total } = usePokemonsContext();
  const { value, open } = useSearchContext();
  const { setValue, openSearch, closeSearch, addHistory } = useSearchActions();

  const portal = typeof window === 'object' && document.getElementById('portal');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addHistory(`${+value}`);
    router.push(`/${+value}`);
    closeSearch();
    inputRef.current?.blur();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
    }
  };

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
      <Input
        ref={inputRef}
        start={<BiSearch size={icons.size.md} />}
        type="search"
        placeholder={open ? '포켓몬 ID를 검색하세요.' : 'Search'}
        className={searchBar}
        value={value}
        onChange={handleChange}
        onFocus={openSearch}
        maxLength={total.toString().length}
      />
      {portal && open ? createPortal(<History />, portal) : null}
    </form>
  );
}
