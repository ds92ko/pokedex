'use client';

import { BiMenu, BiMenuAltRight } from 'react-icons/bi';

import { mobileMenuButton } from '@/components/layouts/mobile-menu-button/index.css';
import MobileMenu from '@/components/portals/mobile-menu';
import { useNavActions, useNavContext } from '@/stores/nav';
import { useSearchContext } from '@/stores/search';
import { icons, vars } from '@/styles/vars.css';

export default function MobileMenuButton() {
  const { open: openSearch } = useSearchContext();
  const { open } = useNavContext();
  const { toggleNav } = useNavActions();

  return (
    <>
      <button
        className={mobileMenuButton[openSearch ? 'open' : 'close']}
        onClick={toggleNav}
        disabled={openSearch}
        aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={open}
      >
        {open ? (
          <BiMenuAltRight
            color={vars.colors.caption}
            size={icons.size.xl}
          />
        ) : (
          <BiMenu
            color={vars.colors.caption}
            size={icons.size.xl}
          />
        )}
      </button>
      <MobileMenu />
    </>
  );
}
