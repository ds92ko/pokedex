import { ReactNode } from 'react';

export interface AccordionProps {
  title: string;
  children: ReactNode;
  open?: boolean;
}
