import { InputProps } from '@/components/common/input/types';

export interface DatalistOption {
  value: string;
  label: string;
}

export interface DatalistProps extends Omit<InputProps, 'onChange' | 'onSelect'> {
  value: string;
  onChange?: (keyword: string, option: DatalistOption) => void;
  onSelect?: (option: DatalistOption) => void;
  options: DatalistOption[];
  disabled?: boolean;
}
