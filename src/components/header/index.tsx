import Link from 'next/link';
import { BiLogoGithub, BiSearch } from 'react-icons/bi';

import Container from '@/components/container';
import { content, globalBar, gnb, header, logo, searchBar } from '@/components/header/index.css';
import Input from '@/components/input';
import { button, link } from '@/styles/global.css';
import { iconSize } from '@/styles/vars.css';

export default function Header() {
  return (
    <header className={header}>
      <Container>
        <div className={content}>
          <h1 className={logo}>
            <Link href="/">Pokédex</Link>
          </h1>
          <div className={globalBar}>
            <nav>
              <ul className={gnb}>
                <li>
                  <Link
                    href="/"
                    className={link}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/favorites"
                    className={link}
                  >
                    Favorites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={link}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/ds92ko/pokedex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={button}
                  >
                    <BiLogoGithub size={iconSize.md} />
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
            <Input
              start={<BiSearch size={iconSize.md} />}
              type="search"
              placeholder="Search"
              className={searchBar}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
