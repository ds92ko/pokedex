import { BiLogoGithub } from 'react-icons/bi';

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
    id: 'github',
    href: 'https://github.com/ds92ko/pokedex',
    icon: BiLogoGithub,
    name: 'GitHub',
    external: true
  }
];
