'use client';

import {
  dialog,
  DialogBackdrop,
  dialogButtonGroup,
  dialogContent,
  dialogTitle
} from '@/components/portals/dialog/index.css';
import Portal from '@/components/portals/portal';
import { useDialogActions, useDialogContext } from '@/stores/dialog';
import { button } from '@/styles/actions.css';

export default function Dialog() {
  const { type, open, title, content, cancelLabel, confirmLabel, resolve } = useDialogContext();
  const { closeDialog } = useDialogActions();

  const handleCancel = () => {
    resolve?.(false);
    closeDialog();
  };

  const handleConfirm = () => {
    resolve?.(true);
    closeDialog();
  };

  return (
    <Portal
      conditional={open}
      delay={300}
    >
      <div className={DialogBackdrop[open ? 'open' : 'close']}>
        <div className={dialog}>
          <h2 className={dialogTitle}>{title}</h2>
          <div className={dialogContent}>{content}</div>
          <div className={dialogButtonGroup}>
            {type === 'confirm' && (
              <button
                type="button"
                className={`${button.md} outline`}
                onClick={handleCancel}
              >
                {cancelLabel || '취소'}
              </button>
            )}
            <button
              type="button"
              className={button.md}
              onClick={handleConfirm}
            >
              {confirmLabel || '확인'}
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
}
