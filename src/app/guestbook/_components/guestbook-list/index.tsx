'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

import { fetchGuestbookList } from '@/api/guestbooks';
import GuestbookItem from '@/app/guestbook/_components/guestbook-item';
import GuestbookItemsSkeleton from '@/app/guestbook/_components/guestbook-item/skeleton';
import { guestbookList } from '@/app/guestbook/_components/guestbook-list/index.css';
import NoData from '@/components/common/no-data';
import { GUESTBOOK_LIST_QUERY_KEY } from '@/constants/guestbooks';

export default function GuestbookList() {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: GUESTBOOK_LIST_QUERY_KEY,
    queryFn: fetchGuestbookList,
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      const { page, pageSize, total } = lastPage;
      const maxPage = Math.ceil(total / pageSize) - 1;
      return page < maxPage ? page + 1 : undefined;
    }
  });

  useEffect(() => {
    if (!observerRef.current || isLoading) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) fetchNextPage();
    });

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, isLoading]);

  if (!isLoading && !data?.pages[0]?.total) {
    return <NoData>등록된 방명록이 없습니다.</NoData>;
  }

  return (
    <>
      <ul className={guestbookList}>
        {data?.pages
          .flatMap(page => page.data)
          .map(item => (
            <GuestbookItem
              key={item.id}
              data={item}
            />
          ))}
        {(isFetchingNextPage || isLoading) && <GuestbookItemsSkeleton />}
      </ul>
      <div ref={observerRef} />
    </>
  );
}
