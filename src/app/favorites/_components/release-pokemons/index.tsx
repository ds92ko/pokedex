'use client';

import { releaseAllMessage } from '@/constants/favorite';
import { useDialogActions } from '@/stores/dialog';
import { useFavoritesActions, useFavoritesContext } from '@/stores/favorites';
import { button } from '@/styles/actions.css';

export default function ReleasePokemons() {
  const { openAlert, openConfirm } = useDialogActions();
  const { favorites } = useFavoritesContext();
  const { clearFavorites } = useFavoritesActions();

  const handleClick = async () => {
    const confirmed = await openConfirm({
      title: `모든 포켓몬과 작별하기`,
      content: releaseAllMessage[Math.floor(Math.random() * releaseAllMessage.length)],
      cancelLabel: '다시 생각하기',
      confirmLabel: '모두 놓아주기'
    });

    if (!confirmed) return;
    clearFavorites();

    openAlert({
      title: `바이바이, 친구들아!`,
      content: `모든 포켓몬이 떠났어요.`
    });
  };

  return (
    <button
      type="button"
      className={`${button.md} outline`}
      onClick={handleClick}
      disabled={!Array.isArray(favorites) || !favorites.length}
    >
      전체 놓아주기
    </button>
  );
}
