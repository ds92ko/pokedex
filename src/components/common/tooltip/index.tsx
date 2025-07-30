'use client';

import {
  autoUpdate,
  flip,
  offset,
  Placement,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole
} from '@floating-ui/react';
import { ReactNode, useState } from 'react';
import { BiInfoCircle } from 'react-icons/bi';

import { tooltip, tooltipButton, tooltipPopup } from '@/components/common/tooltip/index.css';
import { icons } from '@/styles/vars.css';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  placement?: Placement;
}

export default function Tooltip({ children, content, placement = 'right' }: TooltipProps) {
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

  const hover = useHover(context);
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, {
    role: 'label'
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

  return (
    <div className={tooltip}>
      {children}
      <button
        ref={refs.setReference}
        className={tooltipButton}
        {...getReferenceProps()}
        aria-label="정보 보기"
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
