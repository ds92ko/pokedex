'use client';

import Link from 'next/link';

import { gnb, gnbList } from '@/components/layouts/gnb/index.css';
import { ROUTES } from '@/constants/routes';
import { useSearchContext } from '@/stores/search';
import { button, link } from '@/styles/actions.css';
import { icons } from '@/styles/vars.css';

export default function Gnb() {
  const { open } = useSearchContext();

  return (
    <nav className={gnb[open ? 'open' : 'close']}>
      <ul className={gnbList}>
        {ROUTES.map(({ id, href, icon: Icon, name, external }) => (
          <li key={id}>
            {external ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={button.md}
              >
                {Icon && <Icon size={icons.size.lg} />}
                {name}
              </a>
            ) : (
              <Link
                href={href}
                className={link.lg}
              >
                {name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
