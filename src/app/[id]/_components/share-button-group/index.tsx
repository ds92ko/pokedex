'use client';

import { BiLink, BiShareAlt } from 'react-icons/bi';

import { buttonGroup } from '@/app/[id]/_components/pokemon-profile/index.css';
import { useDialogActions } from '@/stores/dialog';
import { button } from '@/styles/actions.css';
import { icons } from '@/styles/vars.css';

const action = (type: 'share' | 'copy') => (type === 'share' ? '공유' : '복사');

export default function ShareButtonGroup({ id }: { id: string }) {
  const { openAlert } = useDialogActions();

  const unsupportedAlert = (type: 'share' | 'copy') =>
    openAlert({
      title: `${action(type)} 불가`,
      content: `이 브라우저는 ${action(type)} 기능을 지원하지 않습니다.`
    });

  const failureAlert = (type: 'share' | 'copy', error?: Error) => {
    // TODO: 취소일 경우 Toast로 변경
    const result = error?.name === 'AbortError' ? '취소' : '실패';
    const postposition = error?.name === 'AbortError' ? '를' : '에';
    openAlert({
      title: `${action(type)} ${result}`,
      content: `${action(type)}${postposition} ${result}했습니다. 다시 시도해주세요.`
    });
  };

  // TODO: Toast로 변경
  const successAlert = (type: 'share' | 'copy') =>
    openAlert({
      title: `${action(type)} 성공`,
      content: `${action(type)}가 성공적으로 완료되었습니다.`
    });

  const handleShare = async () => {
    if (!navigator.share) {
      unsupportedAlert('share');
      return;
    }
    try {
      await navigator.share({
        title: `Pokédex`,
        text: `Check out No.${id} on Pokédex!`,
        url: window.location.href
      });
      successAlert('share');
    } catch (error) {
      failureAlert('share', error as Error);
    }
  };

  const handleCopyLink = async () => {
    if (!navigator.clipboard) {
      unsupportedAlert('copy');
      return;
    }
    try {
      await navigator.clipboard.writeText(window.location.href);
      successAlert('copy');
    } catch {
      failureAlert('copy');
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
