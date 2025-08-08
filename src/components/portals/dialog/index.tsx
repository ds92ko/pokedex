'use client';

import { useId } from 'react';
import React from 'react';

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
  const dialogId = useId();

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
          <div className={dialogContent}>{type === 'form' ? content(dialogId) : content}</div>
          <div className={dialogButtonGroup}>
            {type !== 'alert' && (
              <button
                type="button"
                className={`${button.md} outline`}
                onClick={handleCancel}
              >
                {cancelLabel || '취소'}
              </button>
            )}
            <button
              form={type === 'form' ? dialogId : undefined}
              type={type === 'form' ? 'submit' : 'button'}
              className={button.md}
              onClick={type === 'form' ? undefined : handleConfirm}
            >
              {confirmLabel || '확인'}
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
}
