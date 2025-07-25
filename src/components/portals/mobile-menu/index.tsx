'use client';

import Link from 'next/link';
import { MouseEvent } from 'react';

import {
  mobileMenu,
  mobileMenuBackdrop,
  mobileMenuItem,
  mobileMenuLink,
  mobileMenuList
} from '@/components/portals/mobile-menu/index.css';
import Portal from '@/components/portals/portal';
import { ROUTES } from '@/constants/routes';
import { useNavActions, useNavContext } from '@/stores/nav';
import { button, link } from '@/styles/actions.css';
import { icons } from '@/styles/vars.css';

export default function MobileMenu() {
  const { open } = useNavContext();
  const { closeNav } = useNavActions();
  const clickBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeNav();
  };

  return (
    <Portal
      conditional={open}
      delay={300}
    >
      <div
        className={mobileMenuBackdrop[open ? 'open' : 'close']}
        onClick={clickBackdrop}
      >
        <nav className={mobileMenu[open ? 'open' : 'close']}>
          <ul className={mobileMenuList}>
            {ROUTES.map(({ id, href, icon: Icon, name, external }) => {
              return (
                <li
                  key={id}
                  className={mobileMenuItem}
                >
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${button.md} ${mobileMenuLink}`}
                    >
                      {Icon && <Icon size={icons.size.lg} />}
                      {name}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className={`${link.lg} ${mobileMenuLink}`}
                      onClick={closeNav}
                    >
                      {name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Portal>
  );
}
