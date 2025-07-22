'use client';

import { ReactNode } from 'react';
import { BiInfoCircle } from 'react-icons/bi';

import {
  tooltip,
  tooltipButton,
  tooltipControl,
  tooltipPopup
} from '@/components/common/tooltip/index.css';
import { icons } from '@/styles/vars.css';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

export default function Tooltip({ children, content, placement = 'right' }: TooltipProps) {
  return (
    <div className={tooltip}>
      {children}
      <div className={tooltipControl}>
        <button
          className={tooltipButton}
          aria-label="Tooltip"
        >
          <BiInfoCircle size={icons.size.lg} />
        </button>
        <div className={tooltipPopup[placement]}>{content}</div>
      </div>
    </div>
  );
}
