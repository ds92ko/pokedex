import { BiErrorCircle, BiInfoCircle } from 'react-icons/bi';

import {
  countValue,
  field,
  fieldCount,
  fieldInfo,
  fieldInfoMessage,
  fieldLabel
} from '@/components/common/field/index.css';
import { FieldProps } from '@/components/common/field/types';
import { icons } from '@/styles/vars.css';

export default function Field({ id, label, children, error, message, count }: FieldProps) {
  return (
    <div className={`${field} ${error ? 'error' : ''}`}>
      <label
        htmlFor={id}
        className={fieldLabel}
      >
        {label}
        {count && (
          <span className={fieldCount}>
            <span className={countValue}>{count.value || 0}</span>/{count.max}
          </span>
        )}
      </label>
      {children}
      {(error || message) && (
        <div className={fieldInfo}>
          {error ? <BiErrorCircle size={icons.size.sm} /> : <BiInfoCircle size={icons.size.sm} />}
          <small className={fieldInfoMessage}>{error || message}</small>
        </div>
      )}
    </div>
  );
}
