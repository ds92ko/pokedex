'use client';

import { useOverlayScrollbars } from 'overlayscrollbars-react';
import { ReactNode, useEffect } from 'react';

import 'overlayscrollbars/overlayscrollbars.css';

type OverlayScrollbarProps = Readonly<{
  children: ReactNode;
}>;

export default function OverlayScrollbar({ children }: OverlayScrollbarProps) {
  const [initialize] = useOverlayScrollbars({
    defer: true,
    options: {
      scrollbars: {
        autoHide: 'scroll',
        autoHideDelay: 500
      }
    }
  });

  useEffect(() => {
    initialize(document.body);
  }, [initialize]);

  return <>{children}</>;
}
