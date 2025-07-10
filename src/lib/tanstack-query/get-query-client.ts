import { isServer, QueryClient } from '@tanstack/react-query';

import { queryClientInstance } from '@/lib/tanstack-query/query-client-instance';

let queryClient: QueryClient | null = null;

export const getQueryClient = () => {
  // 서버: 새 인스턴스
  if (isServer) return queryClientInstance();

  // 클라이언트: 싱글톤
  if (!queryClient) queryClient = queryClientInstance();

  return queryClient;
};
