import { ChangeEvent } from 'react';

export interface RatingProps {
  id?: string;
  name?: string;
  checked: number | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
