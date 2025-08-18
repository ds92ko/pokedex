import { MutationFunction, QueryFunction } from '@tanstack/react-query';

import { GUESTBOOK_LIST_QUERY_KEY } from '@/constants/guestbooks';

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

interface GuestbookRow extends Omit<GuestbookFormData, 'satisfaction'> {
  id: string;
  satisfaction: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export type CreateGuestbookRow = Omit<GuestbookRow, 'deletedAt'>;

export type CreateGuestbook = MutationFunction<GuestbookItem, GuestbookFormData>;

export type GuestbookItem = Omit<GuestbookRow, 'password' | 'deletedAt'>;

export interface GuestbookListResponse {
  success: boolean;
  page: number;
  pageSize: number;
  total: number;
  data: GuestbookItem[];
}

export type FetchGuestbookList = QueryFunction<
  GuestbookListResponse,
  typeof GUESTBOOK_LIST_QUERY_KEY
>;
