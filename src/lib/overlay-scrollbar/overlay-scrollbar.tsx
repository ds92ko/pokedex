'use client';

import { useOverlayScrollbars } from 'overlayscrollbars-react';
import { useEffect } from 'react';

import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarProps } from '@/lib/overlay-scrollbar/types';

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

  return children;
}
