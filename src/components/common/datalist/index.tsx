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
import {
  ChangeEvent,
  forwardRef,
  KeyboardEvent,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState
} from 'react';

import {
  datalist,
  datalistOption,
  datalistOptions,
  datalistValue
} from '@/components/common/datalist/index.css';
import { DatalistProps } from '@/components/common/datalist/types';
import Input from '@/components/common/input';
import NoData from '@/components/common/no-data';
import { usePokemonsContext } from '@/stores/pokemons';

const Datalist = forwardRef<HTMLInputElement, DatalistProps>(
  ({ value, onChange, onSelect, options, disabled, ...props }, ref) => {
    const datalistId = useId();
    const { total } = usePokemonsContext();
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const [isComposing, setIsComposing] = useState(false);
    const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
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

    const filteredOptions = useMemo(
      () =>
        options.filter(
          option =>
            option.label.toLowerCase().includes(value.toLowerCase()) ||
            option.value.toLowerCase().includes(value.toLowerCase())
        ),
      [options, value]
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const keyword = e.target.value;
      const option = filteredOptions.find(
        option =>
          option.label.toLowerCase() === keyword.toLowerCase() ||
          option.value.toLowerCase() === keyword.toLowerCase()
      ) || { value: '', label: keyword };
      onChange?.(keyword, option);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (isComposing) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex(prev => Math.min(prev + 1, filteredOptions.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(prev => Math.max(prev - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (isOpen && focusedIndex >= 0) {
            onSelect?.(filteredOptions[focusedIndex]);
            setFocusedIndex(-1);
          }
          break;
      }
    };

    useEffect(() => {
      setFocusedIndex(filteredOptions.length ? 0 : -1);
    }, [filteredOptions.length]);

    useEffect(() => {
      if (focusedIndex < 0) return;
      optionRefs.current[focusedIndex]?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth'
      });
    }, [focusedIndex]);

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
            onKeyDown={handleKeyDown}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
            role="combobox"
            aria-activedescendant={
              focusedIndex >= 0 ? `datalist-option-${focusedIndex}-${datalistId}` : undefined
            }
            aria-autocomplete="list"
            aria-expanded={isOpen}
            aria-controls={`datalist-listbox-${datalistId}`}
            {...props}
          />
        </div>
        {isOpen && value && (
          <ul
            id={`datalist-listbox-${datalistId}`}
            role="listbox"
            ref={refs.setFloating}
            style={floatingStyles}
            className={datalistOptions}
            {...getFloatingProps()}
          >
            {filteredOptions.length ? (
              filteredOptions.map((option, index) => (
                <li key={option.value}>
                  <button
                    id={`datalist-option-${index}-${datalistId}`}
                    ref={el => {
                      optionRefs.current[index] = el;
                    }}
                    type="button"
                    role="option"
                    aria-selected={index === focusedIndex}
                    onClick={() => {
                      onSelect?.(option);
                      setFocusedIndex(-1);
                    }}
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
