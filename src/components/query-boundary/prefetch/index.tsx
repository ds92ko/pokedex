import { dehydrate, HydrationBoundary, QueryKey } from '@tanstack/react-query';

import { PrefetchBoundaryProps } from '@/components/query-boundary/prefetch/types';
import { getQueryClient } from '@/lib/tanstack-query/get-query-client';

export async function PrefetchBoundary<TQueryFnData, TError, TData, TQueryKey extends QueryKey>({
  children,
  options
}: PrefetchBoundaryProps<TQueryFnData, TError, TData, TQueryKey>) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(options);

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
