import { BiLogoGithub } from 'react-icons/bi';

export const SITE_URL = 'https://pokedex-ds92ko.vercel.app';

export const ROUTES = [
  {
    id: 'home',
    href: '/',
    icon: null,
    name: 'Home',
    external: false
  },
  {
    id: 'favorites',
    href: '/favorites',
    icon: null,
    name: 'Favorites',
    external: false
  },
  {
    id: 'quiz',
    href: '/quiz',
    icon: null,
    name: 'Quiz',
    external: false
  },
  {
    id: 'guestbook',
    href: '/guestbook',
    icon: null,
    name: 'Guestbook',
    external: false
  },
  {
    id: 'github',
    href: 'https://github.com/ds92ko/pokedex',
    icon: BiLogoGithub,
    name: 'GitHub',
    external: true
  }
];
