import { globalBar } from '@/components/layouts/global-bar/index.css';
import Gnb from '@/components/layouts/gnb';
import MobileMenuButton from '@/components/layouts/mobile-menu-button';
import Search from '@/components/layouts/search';

export default function GlobalBar() {
  return (
    <div className={globalBar}>
      <Gnb />
      <Search />
      <MobileMenuButton />
    </div>
  );
}
