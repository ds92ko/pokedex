import { format } from 'date-fns';
import { BiEdit, BiTrash } from 'react-icons/bi';

import {
  guestbookCard,
  guestbookCardButtonGroup,
  guestbookCardContent,
  guestbookCardControl,
  guestbookCardTitle
} from '@/app/guestbook/_components/guestbook-item/index.css';
import { GuestbookItemProps } from '@/app/guestbook/_components/guestbook-item/types';
import Rating from '@/components/common/rating';
import { button } from '@/styles/actions.css';
import { icons } from '@/styles/vars.css';

export default function GuestbookItem({ data }: GuestbookItemProps) {
  return (
    <li key={data.id}>
      <div className={guestbookCard}>
        <div className={guestbookCardTitle}>
          <h3>{data.name}</h3>
          <Rating
            checked={data.satisfaction}
            size="md"
            readOnly
          />
        </div>
        <div className={guestbookCardContent}>
          <p>{data.content}</p>
        </div>
        <div className={guestbookCardControl}>
          <small>{format(data.updatedAt, 'yyyy.MM.dd HH:mm:ss')}</small>
          <div className={guestbookCardButtonGroup}>
            <button className={`${button.sm} outline`}>
              <BiEdit size={icons.size.sm} />
              수정
            </button>
            <button className={button.sm}>
              <BiTrash size={icons.size.sm} />
              삭제
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
