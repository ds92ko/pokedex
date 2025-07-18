import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { cherryBombOne, dongle } from '@/app/fonts';
import Container from '@/components/container';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { QueryProvider } from '@/lib/tanstack-query/query-provider';

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
    <html lang="ko">
      <body className={`${cherryBombOne.variable} ${dongle.variable}`}>
        <QueryProvider>
          <Header />
          <main>
            <Container>{children}</Container>
          </main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
