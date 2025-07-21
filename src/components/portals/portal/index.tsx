import { createPortal } from 'react-dom';

import { PortalProps } from '@/components/portals/portal/types';

export default function Portal({ id = 'portal', conditional, children }: PortalProps) {
  const portal = typeof window === 'object' && document.getElementById(id);

  return portal && conditional ? createPortal(children, portal) : null;
}
