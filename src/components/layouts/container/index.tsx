import { container } from '@/components/layouts/container/index.css';
import { ContainerProps } from '@/components/layouts/container/types';

export default function Container({ children }: ContainerProps) {
  return <div className={container}>{children}</div>;
}
