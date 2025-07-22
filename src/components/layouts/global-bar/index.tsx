import { globalBar } from '@/components/layouts/global-bar/index.css';
import Gnb from '@/components/layouts/gnb';
import MobileGnb from '@/components/layouts/mobile-gnb';
import Search from '@/components/layouts/search';

export default function GlobalBar() {
  return (
    <div className={globalBar}>
      <Gnb />
      <Search />
      <MobileGnb />
    </div>
  );
}
