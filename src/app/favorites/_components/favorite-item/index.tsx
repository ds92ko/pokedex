'use client';

import { format } from 'date-fns';
import Link from 'next/link';

import {
  buttonGroup,
  favoriteCard,
  favoriteCardImage,
  favoriteCardNumber,
  favoriteCardText,
  favoriteCardTitle
} from '@/app/favorites/_components/favorite-item/index.css';
import { FavoriteItemProps } from '@/app/favorites/_components/favorite-item/types';
import OptimizedImage from '@/components/common/OptimizedImage';
import { releaseMessage } from '@/constants/favorite';
import { useDialogActions } from '@/stores/dialog';
import { useFavoritesActions } from '@/stores/favorites';
import { usePokemonsContext } from '@/stores/pokemons';
import { button } from '@/styles/actions.css';
import { postposition } from '@/utils/postposition';

export default function FavoriteItem({ pokemon }: FavoriteItemProps) {
  const { total } = usePokemonsContext();
  const { openAlert, openConfirm } = useDialogActions();
  const { removeFavorite } = useFavoritesActions();

  const releasePokemon = async () => {
    const confirmed = await openConfirm({
      title: `${postposition(pokemon.name, '과')} 작별하기`,
      content: releaseMessage[Math.floor(Math.random() * releaseMessage.length)],
      cancelLabel: '다시 생각하기',
      confirmLabel: '놓아주기'
    });

    if (!confirmed) return;
    removeFavorite(pokemon.id);

    openAlert({
      title: `바이바이, ${pokemon.name}!`,
      content: `${postposition(pokemon.name, '이')} 떠났어요.`
    });
  };

  return (
    <li className={`${favoriteCard} ${pokemon.category}`}>
      <div className={favoriteCardImage}>
        <OptimizedImage
          src={pokemon.image}
          alt={pokemon.name}
          fill
          sizes="100%"
          priority={pokemon.id < 5}
        />
      </div>
      <div className={favoriteCardText}>
        <span className={favoriteCardNumber}>
          No.{pokemon.id.toString().padStart(total.toString().length, '0')}
        </span>
        <h3 className={favoriteCardTitle}>{pokemon.name}</h3>
        <p>포획 일시: {format(pokemon.datetime, 'yyyy.MM.dd HH:mm:ss')}</p>
      </div>
      <div className={buttonGroup}>
        <button
          className={`${button.md} outline`}
          onClick={releasePokemon}
        >
          놓아주기
        </button>
        <Link
          className={button.md}
          href={`/${pokemon.id}`}
        >
          도감보기
        </Link>
      </div>
    </li>
  );
}
