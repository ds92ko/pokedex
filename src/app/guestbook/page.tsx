import { Metadata } from 'next';

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
      <Section title="포켓몬 센터">
        <form>
          <div>
            <label htmlFor="name">트레이너 이름</label>
            <small>트레이너분의 이름을 입력해주세요.</small>
            <input
              type="text"
              id="name"
              placeholder="트레이너분의 이름을 입력해주세요."
              required
            />
          </div>
          <div>
            <label htmlFor="satisfaction">모험 만족도</label>
            <small>이번 모험에 대한 만족도를 별점으로 평가해주세요.</small>
            <input
              type="range"
              id="satisfaction"
              min="1"
              max="5"
              step="1"
              required
            />
          </div>
          <div>
            <label htmlFor="content">모험 내용</label>
            <small>모험 중 느낀 점이나 방문 소감을 자유롭게 적어주세요.</small>
            <textarea
              id="content"
              placeholder="모험 내용을 입력해주세요."
              maxLength={500}
              required
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <small>작성한 내용을 수정하거나 삭제할 수 있는 비밀번호를 입력해주세요.</small>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요."
              minLength={4}
              maxLength={20}
              required
            />
          </div>
          <div>
            <h2>⚠️ 이용 안내</h2>
            <p>안내드립니다.</p>
            <p>
              본 방명록은 익명으로 운영되기 때문에, 부적절한 욕설, 광고, 스팸, 개인정보 노출 등의
              내용은 관리자 판단에 따라 예고 없이 삭제될 수 있습니다.
            </p>
            <p>쾌적한 공간 유지를 위해 양해 부탁드립니다.</p>
          </div>
          <button type="submit">발자국 남기기</button>
        </form>
      </Section>
    </>
  );
}
