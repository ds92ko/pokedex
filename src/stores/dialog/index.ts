import { create } from 'zustand';

import { INITIAL_DIALOG_CONTEXT } from '@/stores/dialog/constants';
import { DialogStore } from '@/stores/dialog/types';

const useDialogStore = create<DialogStore>(set => ({
  context: { ...INITIAL_DIALOG_CONTEXT },
  actions: {
    openAlert: ({ title, content, cancelLabel, confirmLabel, disabled }) =>
      new Promise<boolean>(resolve =>
        set({
          context: {
            type: 'alert',
            open: true,
            title,
            content,
            cancelLabel,
            confirmLabel,
            disabled,
            resolve: () => resolve(true)
          }
        })
      ),
    openConfirm: ({ title, content, cancelLabel, confirmLabel, disabled }) =>
      new Promise<boolean>(resolve =>
        set({
          context: {
            type: 'confirm',
            open: true,
            title,
            content,
            cancelLabel,
            confirmLabel,
            disabled,
            resolve: confirmed => resolve(confirmed)
          }
        })
      ),
    openForm: ({ title, content, cancelLabel, confirmLabel, disabled }) =>
      new Promise<boolean>(resolve =>
        set({
          context: {
            type: 'form',
            open: true,
            title,
            content,
            cancelLabel,
            confirmLabel,
            disabled,
            resolve: confirmed => resolve(confirmed)
          }
        })
      ),
    closeDialog: () =>
      set(state => ({
        context: { ...state.context, open: false, resolve: undefined }
      })),
    setDisabled: (disabled: boolean) =>
      set(state => ({
        context: { ...state.context, disabled }
      }))
  }
}));

export const useDialogContext = () => useDialogStore(state => state.context);
export const useDialogActions = () => useDialogStore(state => state.actions);
