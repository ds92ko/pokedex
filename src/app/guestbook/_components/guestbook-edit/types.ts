import { FormContentProps } from '@/stores/dialog/types';
import { GuestbookItem } from '@/type/guestbooks';

export interface GuestbookEditProps extends FormContentProps {
  data: GuestbookItem;
}
