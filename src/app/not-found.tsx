import Link from 'next/link';
import { BiError } from 'react-icons/bi';

import Section from '@/components/layouts/section';
import { button } from '@/styles/actions.css';
import { notFoundContainer, notFoundDescription, notFoundTitle } from '@/styles/not-found.css';
import { vars } from '@/styles/vars.css';

export default function NotFound() {
  return (
    <Section>
      <div className={notFoundContainer}>
        <BiError
          size={100}
          color={vars.colors.primary}
        />
        <div>
          <h2 className={notFoundTitle}>...이런! 여긴 포켓몬이 보이지 않아!..</h2>
          <p className={notFoundDescription}>
            트레이너가 길을 잃었습니다.
            <br />
            포켓몬 도감으로 돌아가 다시 여행을 떠나볼까요?
          </p>
        </div>
        <div>
          <Link
            className={button.lg}
            href="/"
            replace
          >
            도감으로 이동
          </Link>
        </div>
      </div>
    </Section>
  );
}
