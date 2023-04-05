import type { RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('@/pages/Home/Home'));
const Search = lazy(() => import('@/pages/Search/Search'));

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Suspense fallback={<></>}><Home /></Suspense>
    },
    {
        path: '/search',
        element: <Suspense fallback={<></>}><Search /></Suspense>
    }
];
