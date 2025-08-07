import { Metadata } from 'next';

import ControlBar from '@/app/guestbook/_components/control-bar';
import GuestbookIntro from '@/app/guestbook/_components/guestbook-intro';
import { openGraph, twitter } from '@/app/metadata';
import Section from '@/components/layouts/section';
import { SITE_URL } from '@/constants/routes';

const title = '포켓몬 센터';
const description = 'Pokédex에서 포켓몬 마스터를 향한 모험의 발자국을 남겨보세요!';
const url = `${SITE_URL}/guestbook`;

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

export default function GuestbookPage() {
  return (
    <>
      <GuestbookIntro />
      <Section
        title="트레이너 방명록"
        titleContent={<ControlBar />}
      >
        방명록 목록
      </Section>
    </>
  );
}
