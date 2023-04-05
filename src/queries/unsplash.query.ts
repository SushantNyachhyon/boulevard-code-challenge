import { useInfiniteQuery } from 'react-query';

import type { IUnsplash, IResult } from '@/types/unsplash.type';
import { Unsplash } from '@/services/unsplash.service';

export const useUnsplashTopQuery = (page = 1) =>
    useInfiniteQuery<IResult[]>({
        queryKey: ['images', page],
        queryFn: async () => await Unsplash.topPick(page),
        getNextPageParam: () => page++
    });

export const useUnsplashSearchQuery = (q: string, page = 1) =>
    useInfiniteQuery<IUnsplash>({
        queryKey: ['images', q, page],
        queryFn: async () => await Unsplash.search(q, page),
        getNextPageParam: (_, pages) => {
            if (page < pages[0].total_pages)
                return page++;
            return undefined;
        }
    });
