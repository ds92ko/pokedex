import { forwardRef } from 'react';

import { textarea } from '@/components/common/textarea/index.css';
import { TextareaProps } from '@/components/common/textarea/types';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ resize = 'none', disabled, className = '', ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`${textarea} ${className}`}
        style={{ resize }}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
