import type { Metadata } from 'next';
import { fredoka, pressStart2p } from './fonts';

export const metadata: Metadata = {
  title: 'Pokédex',
  description:
    '모든 세대의 포켓몬 정보를 한눈에! 이름, 타입, 능력치를 검색하고, 나만의 포켓몬을 찾아보세요.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pressStart2p.variable} ${fredoka.variable}`}>{children}</body>
    </html>
  );
}
