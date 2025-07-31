import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

import { cherryBombOne, dongle } from '@/app/fonts';
import { layoutMetadata } from '@/app/metadata';
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

export const metadata: Metadata = { ...layoutMetadata };

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false
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
