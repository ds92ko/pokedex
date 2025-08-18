'use client';

import { useState } from 'react';
import { BiSolidStar, BiStar } from 'react-icons/bi';

import { star, starIcon, starInput, stars } from '@/components/common/rating/index.css';
import { RatingProps } from '@/components/common/rating/types';
import { icons, vars } from '@/styles/vars.css';

export default function Rating({
  id,
  name,
  checked,
  onChange,
  disabled,
  readOnly,
  size = 'xl'
}: RatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <ul className={stars}>
      {Array.from({ length: 5 }, (_, i) => (
        <li key={i}>
          <label
            className={star}
            style={{
              transform: `scale(${!disabled && !readOnly && hovered === i ? 1.1 : 1})`
            }}
            {...(!readOnly && {
              onMouseEnter: () => setHovered(i),
              onMouseLeave: () => setHovered(null)
            })}
          >
            <input
              id={`${id}-${i}`}
              name={name}
              className={starInput}
              type="radio"
              value={i + 1}
              checked={checked === i + 1}
              onChange={onChange}
              disabled={disabled}
              readOnly={readOnly}
            />
            <span>
              <BiStar
                size={icons.size[size]}
                color={vars.colors.border}
              />
            </span>
            <span
              className={`${starIcon} ${typeof hovered === 'number' ? (hovered >= i ? 'active' : '') : typeof checked === 'number' && checked > i ? 'active' : ''}`}
            >
              <BiSolidStar
                size={icons.size[size]}
                color={disabled ? vars.colors.border : vars.colors.secondary}
              />
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}
