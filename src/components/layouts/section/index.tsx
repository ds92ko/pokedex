import Container from '@/components/layouts/container';
import { sectionContent, sectionTitle, titleText } from '@/components/layouts/section/index.css';
import { SectionProps } from '@/components/layouts/section/types';

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
