import { forwardRef } from 'react';

import { inputAddon, inputBox, inputField } from '@/components/common/input/index.css';
import { InputProps } from '@/components/common/input/types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ start, end, className = '', ...props }, ref) => {
    return (
      <div className={`${inputBox} ${className}`}>
        {start && <div className={inputAddon.start}>{start}</div>}
        <input
          ref={ref}
          className={inputField}
          {...props}
        />
        {end && <div className={inputAddon.end}>{end}</div>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
