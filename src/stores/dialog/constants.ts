import { DialogContext } from '@/stores/dialog/types';

export const INITIAL_DIALOG_CONTEXT: DialogContext = {
  type: 'alert',
  open: false,
  title: '',
  content: '',
  cancelLabel: '',
  confirmLabel: '',
  resolve: undefined,
  disabled: false
};
