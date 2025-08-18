export interface RatingProps {
  id?: string;
  name?: string;
  rating: number;
  onChange: (rating: number) => void;
  disabled?: boolean;
}
