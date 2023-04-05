import type { IUnsplash, IResult } from '@/types/unsplash.type';
import http from './http';

const topPick = (
    page = 1,
    perPage = 9
): Promise<IResult[]> =>
    http
        .get(`/photos?}&page=${page}&per_page=${perPage}`)
        .then(res => res.data);

const search = (
    q: string,
    page = 1,
    perPage = 9
): Promise<IUnsplash> =>
    http
        .get(`/search/photos?query=${q}&page=${page}&per_page=${perPage}`)
        .then(res => res.data);

export const Unsplash = { topPick, search };
