import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { gothicA1 } from '@/app/fonts';
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
      <body className={gothicA1.variable}>
        <QueryProvider>
          <header>Header</header>
          <main>{children}</main>
          <footer>Footer</footer>
        </QueryProvider>
      </body>
    </html>
  );
}
