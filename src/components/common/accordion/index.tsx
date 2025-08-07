'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

import {
  accordion,
  accordionTitle,
  article,
  content,
  marker
} from '@/components/common/accordion/index.css';
import { AccordionProps } from '@/components/common/accordion/types';
import { icons } from '@/styles/vars.css';

export default function Accordion({ title, children, open }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(open);
  const contentRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null);

  const updateHeight = useCallback(() => {
    const contentEl = contentRef.current;
    const articleEl = articleRef.current;
    if (!contentEl || !articleEl) return;

    articleEl.style.maxHeight = `${isOpen ? contentEl.scrollHeight : 0}px`;
  }, [isOpen]);

  useEffect(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [updateHeight]);

  return (
    <div className={`${accordion} ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        className={accordionTitle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{title}</h3>
        <BiChevronDown
          size={icons.size.lg}
          className={marker}
        />
      </button>
      <article
        ref={articleRef}
        className={article}
      >
        <div
          ref={contentRef}
          className={content}
        >
          {children}
        </div>
      </article>
    </div>
  );
}
