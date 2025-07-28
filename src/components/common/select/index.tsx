'use client';

import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole
} from '@floating-ui/react';
import { useState } from 'react';
import { BiCheck, BiChevronDown, BiChevronUp } from 'react-icons/bi';

import Input from '@/components/common/input';
import {
  select,
  selectField,
  selectOption,
  selectOptions
} from '@/components/common/select/index.css';
import { SelectProps } from '@/components/common/select/types';
import { icons, vars } from '@/styles/vars.css';

export default function Select({ options, placeholder = '', selected, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom',
    middleware: [
      offset(8),
      flip({
        fallbackPlacements: ['top']
      }),
      shift()
    ],
    whileElementsMounted: autoUpdate
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, {
    role: 'listbox'
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

  return (
    <div className={select}>
      <div
        ref={refs.setReference}
        className={selectField}
        {...getReferenceProps()}
      >
        <Input
          end={
            isOpen ? <BiChevronUp size={icons.size.md} /> : <BiChevronDown size={icons.size.md} />
          }
          readOnly
          value={options.find(option => option.value === selected)?.label || ''}
          placeholder={placeholder}
        />
      </div>
      {isOpen && (
        <ul
          ref={refs.setFloating}
          style={floatingStyles}
          className={selectOptions}
          {...getFloatingProps()}
        >
          {options.map(option => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={option.value === selected}
                onClick={() => {
                  onChange?.(option.value);
                  setIsOpen(false);
                }}
                className={`${selectOption} ${option.value === selected ? 'selected' : ''}`}
              >
                {option.label}
                {option.value === selected && (
                  <BiCheck
                    size={icons.size.md}
                    color={vars.colors.accent}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
