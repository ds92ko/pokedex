'use client';

import Link from 'next/link';

import Pokeball from '@/components/common/pokeball';
import Container from '@/components/layouts/container';
import GlobalBar from '@/components/layouts/global-bar';
import { content, header, logo, logoLink, logoText } from '@/components/layouts/header/index.css';
import { useSearchContext } from '@/stores/search';

export default function Header() {
  const { open } = useSearchContext();

  return (
    <header className={header}>
      <Container>
        <div className={content}>
          <h1 className={logo}>
            <Link
              className={logoLink}
              href="/"
            >
              <Pokeball size={30} />
              <span className={logoText[open ? 'open' : 'close']}>Pokédex</span>
            </Link>
          </h1>
          <GlobalBar />
        </div>
      </Container>
    </header>
  );
}
