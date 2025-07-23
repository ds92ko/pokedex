import { FetchInfiniteQueryOptions, QueryKey } from '@tanstack/react-query';
import { ReactNode } from 'react';

export interface PrefetchInfiniteBoundaryProps<
  TQueryFnData,
  TError,
  TData,
  TQueryKey extends QueryKey
> {
  children: ReactNode;
  options: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
}
