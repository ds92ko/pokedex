import { InputHTMLAttributes, ReactNode } from 'react';

import { inputAddon, inputBox, inputField } from '@/components/input/index.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  start?: ReactNode;
  end?: ReactNode;
}

export default function Input({ start, end, className = '', ...props }: InputProps) {
  return (
    <div className={`${inputBox} ${className}`}>
      {start && <div className={inputAddon.start}>{start}</div>}
      <input
        className={inputField}
        {...props}
      />
      {end && <div className={inputAddon.end}>{end}</div>}
    </div>
  );
}
