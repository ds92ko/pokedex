import { MutationFunction } from '@tanstack/react-query';

export interface GuestbookFormData {
  name: string;
  satisfaction: number | null;
  content: string;
  password: string;
}

export type GuestbookFormErrors = Record<keyof GuestbookFormData, string>;

export type GuestbooksValidation = {
  [K in keyof GuestbookFormData]: (value: GuestbookFormData[K]) => boolean;
};

interface GuestbookRow extends GuestbookFormData {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export type CreateGuestbookRow = Omit<GuestbookRow, 'updatedAt' | 'deletedAt'>;

export type CreateGuestbook = MutationFunction<Response, GuestbookFormData>;
