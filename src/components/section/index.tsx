import { ReactNode } from 'react';

import Container from '@/components/container';
import { sectionContent, sectionTitle, titleText } from '@/components/section/index.css';

interface SectionProps {
  className?: string;
  title?: string;
  titleContent?: ReactNode;
  children: ReactNode;
}

export default function Section({ className = '', title, titleContent, children }: SectionProps) {
  return (
    <section className={className}>
      <Container>
        <div className={sectionTitle}>
          <h2 className={titleText}>{title}</h2>
          {titleContent}
        </div>
        <div className={sectionContent}>{children}</div>
      </Container>
    </section>
  );
}
