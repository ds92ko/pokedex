import { Metadata } from 'next';

import { alt, size } from '@/app/opengraph-image';
import { SITE_URL } from '@/constants/routes';

const title = 'Pokédex';
const description = 'Pokédex에서 모든 포켓몬을 확인하고, 나만의 포켓몬을 찾아보세요!';

export const openGraph = {
  type: 'website',
  url: SITE_URL,
  description,
  siteName: title,
  locale: 'ko_KR',
  images: {
    ...size,
    alt,
    url: `${SITE_URL}/opengraph-image`
  },
  title: {
    template: `%s | ${title}`,
    default: title
  }
};

export const twitter = {
  description,
  card: 'summary_large_image',
  images: {
    ...size,
    alt,
    url: `${SITE_URL}/opengraph-image`
  },
  title: {
    template: `%s | ${title}`,
    default: title
  }
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
  keywords: ['포켓몬', '포켓몬스터', '포켓몬 도감', '포켓몬 정보', 'Pokémon', 'Pokédex', 'PokeAPI'],
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
  openGraph,
  twitter
};
