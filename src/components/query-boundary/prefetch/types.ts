import { FetchQueryOptions, QueryKey } from '@tanstack/react-query';
import { ReactNode } from 'react';

export interface PrefetchBoundaryProps<TQueryFnData, TError, TData, TQueryKey extends QueryKey> {
  children: ReactNode;
  options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
}
