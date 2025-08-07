'use client';

import { button } from '@/styles/actions.css';

export default function GuestbookRegister() {
  return (
    <button
      type="button"
      className={`${button.md} outline`}
    >
      방명록 작성
    </button>
  );
}
