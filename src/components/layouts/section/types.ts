import { ReactNode } from 'react';

export interface SectionProps {
  className?: string;
  title?: string;
  titleContent?: ReactNode;
  children: ReactNode;
}
