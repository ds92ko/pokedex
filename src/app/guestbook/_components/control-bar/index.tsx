import { controlBar } from '@/app/guestbook/_components/control-bar/index.css';
import GuestbookRegister from '@/app/guestbook/_components/guestbook-register';

export default function ControlBar() {
  return (
    <div className={controlBar}>
      <GuestbookRegister />
    </div>
  );
}
