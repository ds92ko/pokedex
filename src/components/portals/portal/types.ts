import { ReactNode } from 'react';

export interface PortalProps {
  id?: string;
  conditional: boolean;
  children: ReactNode;
}
