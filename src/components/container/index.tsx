import { ReactNode } from 'react';

import { container } from '@/components/container/index.css';

export default function Container({ children }: { children: ReactNode }) {
  return <div className={container}>{children}</div>;
}
