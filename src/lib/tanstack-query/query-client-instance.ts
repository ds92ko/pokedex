import { defaultShouldDehydrateQuery, Query, QueryClient } from '@tanstack/react-query';

export const queryClientInstance = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 10, // 10분 동안 fresh 유지 — 잦은 refetch 방지
        gcTime: 1000 * 60 * 30, // 30분간 캐시 유지 — 사용자 이동 시 데이터 재사용 좋음
        retry: 1, // 재시도 1회 — 네트워크 불안정 고려 최소화
        retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 10000), // 최대 10초 재시도 딜레이
        refetchOnMount: false, // 페이지/컴포넌트 마운트 시 재요청 방지
        refetchOnWindowFocus: false, // 창 포커스 시 재요청 방지 (불필요한 네트워크 트래픽 절감)
        refetchOnReconnect: true, // 네트워크 재연결 시 최신화는 유지
        enabled: true // 기본 자동 실행
      },
      dehydrate: {
        shouldDehydrateQuery: (query: Query) => defaultShouldDehydrateQuery(query)
      }
    }
  });
