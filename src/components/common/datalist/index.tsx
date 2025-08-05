'use client';

import {
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useInteractions,
  useRole
} from '@floating-ui/react';
import { ChangeEvent, forwardRef, useState } from 'react';

import {
  datalist,
  datalistOption,
  datalistOptions,
  datalistValue
} from '@/components/common/datalist/index.css';
import { DatalistOption, DatalistProps } from '@/components/common/datalist/types';
import Input from '@/components/common/input';
import NoData from '@/components/common/no-data';
import { usePokemonsContext } from '@/stores/pokemons';

const Datalist = forwardRef<HTMLInputElement, DatalistProps>(
  ({ value, onChange, onSelect, options, disabled, ...props }, ref) => {
    const { total } = usePokemonsContext();
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

    const focus = useFocus(context, { enabled: !disabled });
    const dismiss = useDismiss(context, { enabled: !disabled });
    const role = useRole(context, {
      role: 'listbox'
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([focus, dismiss, role]);

    const filteredOptions = options.filter(
      option =>
        option.label.toLowerCase().includes(value.toLowerCase()) ||
        option.value.toLowerCase().includes(value.toLowerCase())
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const keyword = e.target.value;
      const option = options.find(
        option =>
          option.label.toLowerCase() === keyword.toLowerCase() ||
          option.value.toLowerCase() === keyword.toLowerCase()
      ) || { value: '', label: keyword };
      onChange?.(keyword, option);
    };

    const handleClick = (option: DatalistOption) => {
      onSelect?.(option);
      setIsOpen(false);
    };

    return (
      <div className={datalist}>
        <div
          ref={refs.setReference}
          {...getReferenceProps()}
        >
          <Input
            ref={ref}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            {...props}
          />
        </div>
        {isOpen && value && (
          <ul
            ref={refs.setFloating}
            style={floatingStyles}
            className={datalistOptions}
            {...getFloatingProps()}
          >
            {filteredOptions.length ? (
              filteredOptions.map(option => (
                <li key={option.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={option.label === value}
                    onClick={() => handleClick(option)}
                    className={datalistOption}
                  >
                    <span className={datalistValue}>
                      No.{option.value.toString().padStart(total.toString().length, '0')}
                    </span>
                    <span>{option.label}</span>
                  </button>
                </li>
              ))
            ) : (
              <li>
                <NoData>검색 결과가 없습니다.</NoData>
              </li>
            )}
          </ul>
        )}
      </div>
    );
  }
);

Datalist.displayName = 'Datalist';

export default Datalist;
