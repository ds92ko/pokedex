'use client';

import GuestbookForm from '@/app/guestbook/_components/guestbook-form';
import { useDialogActions } from '@/stores/dialog';
import { button } from '@/styles/actions.css';

export default function GuestbookRegister() {
  const { openForm } = useDialogActions();

  const handleClick = () => {
    openForm({
      title: '방명록 작성',
      content: dialogId => <GuestbookForm dialogId={dialogId} />,
      cancelLabel: '취소하기',
      confirmLabel: '등록하기',
      disabled: true
    });
  };

  return (
    <button
      type="button"
      className={`${button.md} outline`}
      onClick={handleClick}
    >
      방명록 작성
    </button>
  );
}
