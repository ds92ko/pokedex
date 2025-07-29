import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { cherryBombOne, dongle } from '@/app/fonts';
import { alt, size } from '@/app/opengraph-image';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Dialog from '@/components/portals/dialog';
import OverlayScrollbar from '@/lib/overlay-scrollbar/overlay-scrollbar';
import { QueryProvider } from '@/lib/tanstack-query/query-provider';
import { main } from '@/styles/layout.css';

import '@/styles/reset.css';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = {
  metadataBase: new URL('https://pokedex-ds92ko.vercel.app'),
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  title: {
    default: 'Pokédex',
    template: '%s | Pokédex'
  },
  description: 'Pokédex에서 모든 포켓몬을 확인하고, 나만의 포켓몬을 찾아보세요!',
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
    type: 'website',
    url: 'https://pokedex-ds92ko.vercel.app',
    description: 'Pokédex에서 모든 포켓몬을 확인하고, 나만의 포켓몬을 찾아보세요!',
    siteName: 'Pokédex',
    locale: 'ko_KR',
    images: {
      ...size,
      alt,
      url: 'https://pokedex-ds92ko.vercel.app/opengraph-image'
    },
    title: {
      template: `%s | Pokédex`,
      default: 'Pokédex'
    }
  }
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ko"
      data-overlayscrollbars-initialize
    >
      <body
        className={`${cherryBombOne.variable} ${dongle.variable}`}
        data-overlayscrollbars-initialize
      >
        <QueryProvider>
          <OverlayScrollbar>
            <Header />
            <main className={main}>{children}</main>
            <Footer />
            <div id="portal">
              <Dialog />
            </div>
          </OverlayScrollbar>
        </QueryProvider>
      </body>
    </html>
  );
}
