import {
  guestbookIntroContent,
  listItem
} from '@/app/guestbook/_components/guestbook-intro/index.css';
import Accordion from '@/components/common/accordion';
import Section from '@/components/layouts/section';

export default function GuestbookIntro() {
  return (
    <Section title="포켓몬 센터">
      <div className={guestbookIntroContent}>
        <Accordion title="🧢 개발소장 인사말">
          <div>
            <p>🎉 포켓몬 센터에 오신 포켓몬 트레이너 여러분, 환영합니다!</p>
            <p>
              이곳은 트레이너분들이 Pokédex 모험의 발자국을 남기고 🗺️, 모험 중 느낀 점이나 방문
              소감을 나누는 공간입니다 💬✨
            </p>
            <p>
              여러분의 소중한 모험담은 Pokédex 개발소장의 XP🧠가 되어, 더 멋진 모험을 위한 밑거름이
              됩니다 🌱
            </p>
            <p>많은 참여 부탁드려요! 🙌</p>
            <p>Pokédex 개발소장은 포켓몬 마스터를 향한 여러분의 모험을 진심으로 응원합니다 🎒</p>
          </div>
        </Accordion>
        <Accordion title="⚠️ 방명록 작성 안내">
          <div>
            <p>
              본 방명록은 익명👤으로 운영되기 때문에, 아래와 같은 부적절한 내용은 Pokédex 개발소장의
              판단에 따라 예고 없이 삭제될 수 있습니다 🧹
            </p>
            <ul>
              <li className={listItem}>🤬 욕설</li>
              <li className={listItem}>📢 광고</li>
              <li className={listItem}>🚫 스팸</li>
              <li className={listItem}>🔐 개인정보 노출 등</li>
            </ul>
            <p>쾌적한 공간 유지를 위해 협조 부탁드립니다 🤝✨</p>
          </div>
        </Accordion>
      </div>
    </Section>
  );
}
