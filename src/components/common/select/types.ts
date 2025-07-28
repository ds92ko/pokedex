export interface SelectProps {
  options: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
  selected?: string;
  onChange?: (value: string) => void;
}
