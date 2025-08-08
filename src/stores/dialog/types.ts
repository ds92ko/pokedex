import { ReactElement, ReactNode } from 'react';

export interface FormContentProps {
  dialogId: string;
}

interface DialogPropsBase {
  title: string;
  cancelLabel?: string;
  confirmLabel?: string;
  disabled?: boolean;
}

export interface AlertConfirmProps extends DialogPropsBase {
  content: ReactNode;
}

export interface FormProps extends DialogPropsBase {
  content: (dialogId: string) => ReactElement<FormContentProps>;
}

interface DialogContextBase extends DialogPropsBase {
  type: 'alert' | 'confirm' | 'form';
  open: boolean;
  resolve?: (value: boolean) => void;
}

export interface AlertConfirmDialogContext extends DialogContextBase {
  type: 'alert' | 'confirm';
  content: ReactNode;
}

export interface FormDialogContext extends DialogContextBase {
  type: 'form';
  content: (dialogId: string) => ReactElement<FormContentProps>;
}

export type DialogContext = AlertConfirmDialogContext | FormDialogContext;

export interface DialogStore {
  context: DialogContext;
  actions: {
    openAlert: (options: AlertConfirmProps) => Promise<boolean>;
    openConfirm: (options: AlertConfirmProps) => Promise<boolean>;
    openForm: (options: FormProps) => Promise<boolean>;
    closeDialog: () => void;
    setDisabled: (disabled: boolean) => void;
  };
}
