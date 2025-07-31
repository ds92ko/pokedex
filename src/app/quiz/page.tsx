import { Metadata } from 'next';

import { openGraph, twitter } from '@/app/metadata';
import QuizContent from '@/app/quiz/quiz-content';
import Section from '@/components/layouts/section';
import { SITE_URL } from '@/constants/routes';

const title = '포켓몬 퀴즈';
const description = 'Pokédex에서 포켓몬 퀴즈를 풀어보세요!';
const url = `${SITE_URL}/quiz`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url
  },
  openGraph: {
    ...openGraph,
    title,
    description,
    url
  },
  twitter: {
    ...twitter,
    title,
    description
  }
};

export default function QuizPage() {
  return (
    <>
      <Section title="포켓몬 퀴즈">
        <QuizContent />
      </Section>
    </>
  );
}
