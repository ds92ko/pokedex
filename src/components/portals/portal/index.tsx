'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { PortalProps } from '@/components/portals/portal/types';

export default function Portal({ id = 'portal', conditional, delay = 0, children }: PortalProps) {
  const portal = typeof window === 'object' && document.getElementById(id);
  const [shouldRender, setShouldRender] = useState(conditional);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (conditional) {
      setShouldRender(true);
    } else {
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, delay);
    }

    return () => clearTimeout(timeoutId);
  }, [conditional, delay]);

  return portal && shouldRender ? createPortal(children, portal) : null;
}
