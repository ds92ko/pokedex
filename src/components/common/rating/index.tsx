'use client';

import { useState } from 'react';
import { BiSolidStar, BiStar } from 'react-icons/bi';

import { star, starIcon, stars } from '@/components/common/rating/index.css';
import { RatingProps } from '@/components/common/rating/types';
import { icons, vars } from '@/styles/vars.css';

export default function Rating({ id, name, rating, onChange, disabled }: RatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <ul
      id={id}
      className={stars}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <li key={i}>
          <button
            id={`${id}-${i}`}
            name={name}
            type="button"
            className={star}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onChange(i + 1)}
            disabled={disabled}
          >
            <span>
              <BiStar
                size={icons.size.xl}
                color={vars.colors.border}
              />
            </span>
            <span
              className={`${starIcon} ${typeof hovered === 'number' ? (hovered >= i ? 'active' : '') : rating > i ? 'active' : ''}`}
            >
              <BiSolidStar
                size={icons.size.xl}
                color={disabled ? vars.colors.border : vars.colors.secondary}
              />
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
