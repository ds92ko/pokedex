'use client';

import {
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole
} from '@floating-ui/react';
import { useState } from 'react';
import { BiInfoCircle } from 'react-icons/bi';

import { tooltip, tooltipButton, tooltipPopup } from '@/components/common/tooltip/index.css';
import { TooltipProps } from '@/components/common/tooltip/types';
import { icons } from '@/styles/vars.css';

export default function Tooltip({
  children,
  content,
  placement = 'right',
  disabled
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      offset(8),
      flip({
        fallbackPlacements: ['bottom', 'top', 'left']
      }),
      shift()
    ],
    whileElementsMounted: autoUpdate
  });

  const hover = useHover(context, { enabled: !disabled });
  const focus = useFocus(context, { enabled: !disabled });
  const dismiss = useDismiss(context, { enabled: !disabled });
  const role = useRole(context, {
    role: 'label'
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

  return (
    <div className={tooltip}>
      {children}
      <button
        ref={refs.setReference}
        type="button"
        className={tooltipButton}
        {...getReferenceProps()}
        aria-label="정보 보기"
        disabled={disabled}
      >
        <BiInfoCircle size={icons.size.lg} />
      </button>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className={tooltipPopup}
          {...getFloatingProps()}
        >
          {content}
        </div>
      )}
    </div>
  );
}
