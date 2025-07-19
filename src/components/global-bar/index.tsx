'use client';

import Link from 'next/link';
import { BiLogoGithub } from 'react-icons/bi';

import { globalBar, gnb, gnbList } from '@/components/global-bar/index.css';
import Search from '@/components/search';
import { useSearchContext } from '@/stores/search';
import { button, link } from '@/styles/actions.css';
import { icons } from '@/styles/vars.css';

export default function GlobalBar() {
  const { open } = useSearchContext();

  return (
    <div className={globalBar}>
      <nav className={gnb[open ? 'open' : 'close']}>
        <ul className={gnbList}>
          <li>
            <Link
              href="/"
              className={link.lg}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/favorites"
              className={link.lg}
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={link.lg}
            >
              About
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/ds92ko/pokedex"
              target="_blank"
              rel="noopener noreferrer"
              className={button.md}
            >
              <BiLogoGithub size={icons.size.md} />
              GitHub
            </a>
          </li>
        </ul>
      </nav>
      <Search />
    </div>
  );
}
