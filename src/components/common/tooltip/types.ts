import { Placement } from '@floating-ui/react';
import { ReactNode } from 'react';

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  placement?: Placement;
  disabled?: boolean;
}
