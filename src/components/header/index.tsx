import Link from 'next/link';

import Container from '@/components/container';
import GlobalBar from '@/components/global-bar';
import { content, header, logo, logoLink, logoText } from '@/components/header/index.css';
import Pokeball from '@/components/pokeball';

export default function Header() {
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
              <span className={logoText}>Pokédex</span>
            </Link>
          </h1>
          <GlobalBar />
        </div>
      </Container>
    </header>
  );
}
