'use client';

import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import { BiMenu, BiMenuAltRight } from 'react-icons/bi';

import { GNB } from '@/components/layouts/gnb/constants';
import {
  mobileGnb,
  mobileGnbBackdrop,
  mobileGnbButton,
  mobileGnbItem,
  mobileGnbLink,
  mobileGnbList
} from '@/components/layouts/mobile-gnb/index.css';
import Portal from '@/components/portals/portal';
import { useSearchContext } from '@/stores/search';
import { button, link } from '@/styles/actions.css';
import { icons, vars } from '@/styles/vars.css';

export default function MobileGnb() {
  const { open: openSearch } = useSearchContext();
  const [open, setOpen] = useState(false);

  const toggleGnb = () => setOpen(!open);
  const clickBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  return (
    <>
      <button
        className={mobileGnbButton[openSearch ? 'open' : 'close']}
        onClick={toggleGnb}
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
      <Portal
        conditional={open}
        delay={300}
      >
        <div
          className={mobileGnbBackdrop[open ? 'open' : 'close']}
          onClick={clickBackdrop}
        >
          <nav className={mobileGnb[open ? 'open' : 'close']}>
            <ul className={mobileGnbList}>
              {GNB.map(({ id, href, icon: Icon, name, external }) => (
                <li
                  key={id}
                  className={mobileGnbItem}
                >
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${button.md} ${mobileGnbLink}`}
                    >
                      {Icon && <Icon size={icons.size.lg} />}
                      {name}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className={`${link.lg} ${mobileGnbLink}`}
                      onClick={toggleGnb}
                    >
                      {name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Portal>
    </>
  );
}
