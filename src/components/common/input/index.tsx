import { forwardRef } from 'react';

import { inputAddon, inputBox, inputField } from '@/components/common/input/index.css';
import { InputProps } from '@/components/common/input/types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', start, end, disabled, className = '', ...props }, ref) => {
    return (
      <div className={`${inputBox} ${disabled ? 'disabled' : ''} ${className}`}>
        {start && <div className={inputAddon}>{start}</div>}
        <input
          ref={ref}
          type={type}
          className={inputField}
          disabled={disabled}
          {...props}
        />
        {end && <div className={inputAddon}>{end}</div>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
