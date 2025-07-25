'use client';

import { BiLink, BiShareAlt } from 'react-icons/bi';

import { buttonGroup } from '@/app/[id]/_components/pokemon-profile/index.css';
import { button } from '@/styles/actions.css';
import { icons } from '@/styles/vars.css';

// TODO: alert을 Dialog 혹은 Toast로 변경
export default function ShareButtonGroup({ id }: { id: string }) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Pokédex`,
          text: `Check out No.${id} on Pokédex!`,
          url: window.location.href
        });
      } catch (err) {
        console.warn('공유 취소 또는 실패:', err);
        alert('공유에 실패했습니다. 다시 시도해주세요.');
      }
    } else {
      alert('이 브라우저는 공유 기능을 지원하지 않습니다.');
    }
  };

  const handleCopyLink = async () => {
    if (!navigator.clipboard) {
      alert('이 브라우저는 클립보드 API를 지원하지 않습니다.');
      return;
    }
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다.');
    } catch (err) {
      console.log(err);
      alert('링크 복사에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className={buttonGroup}>
      <button
        type="button"
        className={button.sm}
        aria-label="공유하기"
        onClick={handleShare}
      >
        <BiShareAlt size={icons.size.sm} />
        공유
      </button>
      <button
        type="button"
        className={button.sm}
        aria-label="링크 복사하기"
        onClick={handleCopyLink}
      >
        <BiLink size={icons.size.sm} />
        복사
      </button>
    </div>
  );
}
