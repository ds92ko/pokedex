'use client';

import Link from 'next/link';
import { useState } from 'react';
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
import { icons } from '@/styles/vars.css';

export default function MobileGnb() {
  const { open: openSearch } = useSearchContext();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={mobileGnbButton[openSearch ? 'open' : 'close']}
        onClick={() => setOpen(!open)}
        disabled={openSearch}
        aria-label="Toggle GNB"
      >
        {open ? <BiMenuAltRight size={icons.size.xl} /> : <BiMenu size={icons.size.xl} />}
      </button>
      <Portal conditional={open}>
        <div className={mobileGnbBackdrop}>
          <nav className={mobileGnb}>
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
                      onClick={() => setOpen(false)}
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
