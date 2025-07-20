import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { cherryBombOne, dongle } from '@/app/fonts';
import Footer from '@/components/footer';
import Header from '@/components/header';
import OverlayScrollbar from '@/lib/overlay-scrollbar/overlay-scrollbar';
import { QueryProvider } from '@/lib/tanstack-query/query-provider';
import { main } from '@/styles/layout.css';
import '@/styles/reset.css';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = {
  title: 'Pokédex',
  description:
    '모든 세대의 포켓몬 정보를 한눈에! 이름, 타입, 능력치를 검색하고, 나만의 포켓몬을 찾아보세요.'
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
            <div id="portal" />
          </OverlayScrollbar>
        </QueryProvider>
      </body>
    </html>
  );
}
