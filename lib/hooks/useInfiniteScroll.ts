import { useEffect, useRef, useState } from "react";

export function useInfiniteScroll<T>({
  fetchFn,
  limit = 9,
  initialData = [],
}: {
  fetchFn: (skip: number, limit: number) => Promise<T[]>;
  limit?: number;
  initialData?: T[];
}) {
  const [data, setData] = useState<T[]>(initialData);
  const [page, setPage] = useState(initialData.length > 0 ? 1 : 0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !loading && hasMore) {
          setLoading(true);
          const result = await fetchFn(page * limit, limit);
          setData((prev) => [...prev, ...result]);
          setHasMore(result.length === limit);
          setPage((prev) => prev + 1);
          setLoading(false);
        }
      },
      { rootMargin: "250px" }
    );

    const el = loaderRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [page, loading, hasMore, fetchFn, limit]);

  return { data, loaderRef, loading, hasMore };
}
