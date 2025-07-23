import { ReactNode } from 'react';

export interface PortalProps {
  id?: string;
  conditional: boolean;
  delay?: number; // ms
  children: ReactNode;
}
