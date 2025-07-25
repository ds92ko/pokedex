import { ReactNode } from 'react';

interface DialogProps {
  title: string;
  content: ReactNode;
  cancelLabel?: string;
  confirmLabel?: string;
}

interface DialogContext extends DialogProps {
  type?: 'alert' | 'confirm';
  open: boolean;
  resolve?: (value: boolean) => void;
}

export interface DialogStore {
  context: DialogContext;
  actions: {
    openAlert: (options: DialogProps) => Promise<boolean>;
    openConfirm: (options: DialogProps) => Promise<boolean>;
    closeDialog: () => void;
  };
}
