import { BADGE_ICONS } from '@/components/common/badges/constants';
import { badgeItem, badgeList } from '@/components/common/badges/index.css';
import { BadgesProps } from '@/components/common/badges/types';
import { vars } from '@/styles/vars.css';

export default function Badges({ badges }: BadgesProps) {
  return (
    <ul className={badgeList}>
      {badges.map(({ kind, key, name }) => (
        <li
          key={key}
          className={badgeItem}
          style={
            kind === 'category'
              ? {
                  color: vars.colors.category[key].text,
                  background: vars.colors.category[key].background,
                  border: `2px solid ${vars.colors.category[key].background}`
                }
              : {
                  color: vars.colors.type[key],
                  background: vars.alpha.type[key],
                  border: `2px solid ${vars.colors.type[key]}`
                }
          }
        >
          {BADGE_ICONS[key]} {name}
        </li>
      ))}
    </ul>
  );
}
