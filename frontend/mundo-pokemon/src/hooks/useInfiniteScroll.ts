import { useEffect, useRef } from "react";

type InfiniteScrollOptions = {
    callback: () => void;
    hasMore: boolean;
    rootMargin?: string;
}

export function useInfiniteScroll({ callback, hasMore, rootMargin }: InfiniteScrollOptions) {
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!sentinelRef.current) return;

        const observer = new IntersectionObserver(entries => {
            const entry = entries[0];
            if (entry.isIntersecting && hasMore) {
                callback();
            }
        }, { rootMargin });

        observer.observe(sentinelRef.current);

        return () => observer.disconnect();
    }, [callback, hasMore, rootMargin]);

    return { sentinelRef };
}