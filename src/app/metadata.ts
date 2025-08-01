import { Metadata } from 'next';

import { alt, size } from '@/app/opengraph-image';
import { SITE_URL } from '@/constants/routes';

const title = 'Pokédex';
const description = 'Pokédex에서 모든 포켓몬을 확인하고, 나만의 포켓몬을 찾아보세요!';
const images = {
  ...size,
  alt,
  url: `${SITE_URL}/opengraph-image`
};

export const openGraph = {
  type: 'website',
  siteName: title,
  locale: 'ko_KR',
  images: { ...images }
};

export const twitter = {
  card: 'summary_large_image',
  images: { ...images }
};

export const layoutMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  title: {
    default: title,
    template: `%s | ${title}`
  },
  description,
  keywords: [
    '포켓몬',
    '포켓몬스터',
    '포켓몬 도감',
    '포켓몬 정보',
    '포켓몬 놀이터',
    '포켓몬 퀴즈',
    'Pokemon',
    'Pokémon',
    'Pokedex',
    'Pokédex',
    'PokeAPI'
  ],
  authors: [{ name: 'Dasom Ko' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    ...openGraph,
    title: {
      template: `%s | ${title}`,
      default: title
    },
    description,
    url: SITE_URL
  },
  twitter: {
    ...twitter,
    title: {
      template: `%s | ${title}`,
      default: title
    },
    description
  }
};
