import { dehydrate, HydrationBoundary, QueryKey } from '@tanstack/react-query';

import { PrefetchInfiniteBoundaryProps } from '@/components/query-boundary/prefetch-infinite/types';
import { getQueryClient } from '@/lib/tanstack-query/get-query-client';

export async function PrefetchInfiniteBoundary<
  TQueryFnData,
  TError,
  TData,
  TQueryKey extends QueryKey
>({ children, options }: PrefetchInfiniteBoundaryProps<TQueryFnData, TError, TData, TQueryKey>) {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(options);

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
