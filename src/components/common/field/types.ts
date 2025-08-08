export interface FieldProps {
  id: string;
  label: string;
  children: React.ReactNode;
  error?: string;
  message?: string;
  count?: {
    value: number;
    max: number;
  };
}
