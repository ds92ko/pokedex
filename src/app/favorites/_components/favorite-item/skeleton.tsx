import {
  buttonGroup,
  favoriteCard,
  favoriteCardImage,
  favoriteCardNumber,
  favoriteCardText,
  favoriteCardTitle
} from '@/app/favorites/_components/favorite-item/index.css';
import Pokeball from '@/components/common/pokeball';
import { button } from '@/styles/actions.css';
import { skeleton } from '@/styles/skeleton.css';

export default function FavoriteItemsSkeleton() {
  return Array(4)
    .fill('favorite-item-skeleton')
    .map((val, idx) => (
      <li
        key={`${val}-${idx}`}
        className={favoriteCard}
      >
        <div className={favoriteCardImage}>
          <Pokeball />
        </div>
        <div className={favoriteCardText}>
          <span className={`${favoriteCardNumber} ${skeleton}`}>No.0000</span>
          <h3 className={`${favoriteCardTitle} ${skeleton}`}>포켓몬 이름</h3>
          <p className={skeleton}>포획 일시: yyyy.MM.dd HH:mm:ss</p>
        </div>
        <div className={buttonGroup}>
          <button
            className={`${button.md} outline`}
            disabled
          >
            놓아주기
          </button>
          <button
            className={button.md}
            disabled
          >
            도감보기
          </button>
        </div>
      </li>
    ));
}
