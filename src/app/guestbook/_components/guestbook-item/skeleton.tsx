import { format } from 'date-fns';
import { BiEdit, BiTrash } from 'react-icons/bi';

import {
  guestbookCard,
  guestbookCardButtonGroup,
  guestbookCardContent,
  guestbookCardControl,
  guestbookCardTitle
} from '@/app/guestbook/_components/guestbook-item/index.css';
import Rating from '@/components/common/rating';
import { GUESTBOOK_LIST_LIMIT } from '@/constants/guestbooks';
import { button } from '@/styles/actions.css';
import { skeleton } from '@/styles/skeleton.css';
import { icons } from '@/styles/vars.css';

export default function GuestbookItemsSkeleton() {
  return Array(GUESTBOOK_LIST_LIMIT)
    .fill('guestbook-item-skeleton')
    .map((val, idx) => (
      <li key={`${val}-${idx}`}>
        <div className={guestbookCard}>
          <div className={guestbookCardTitle}>
            <h3 className={skeleton}>트레이너 이름</h3>
            <Rating
              checked={null}
              size="md"
              readOnly
            />
          </div>
          <div className={guestbookCardContent}>
            <p className={skeleton}>모험 내용</p>
          </div>
          <div className={guestbookCardControl}>
            <small className={skeleton}>yyyy.MM.dd HH:mm:ss</small>
            <div className={guestbookCardButtonGroup}>
              <button
                className={`${button.sm} outline`}
                disabled
              >
                <BiEdit size={icons.size.sm} />
                수정
              </button>
              <button
                className={button.sm}
                disabled
              >
                <BiTrash size={icons.size.sm} />
                삭제
              </button>
            </div>
          </div>
        </div>
      </li>
    ));
}
