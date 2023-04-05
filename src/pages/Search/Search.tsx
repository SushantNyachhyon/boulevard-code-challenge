import type { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useUnsplashSearchQuery } from '@/queries/unsplash.query';
import { ImageContent } from '@/components/ImageContent';
import { ImageSkeleton } from '@/components/ImageSkeleton';
import Spinner from '@/components/Spinner/Spinner';

const Home: FC = () => {
    const [searchParams,] = useSearchParams();
    const {
        data,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage
    } = useUnsplashSearchQuery(searchParams.get('q') || '', 1);

    return (
        <main>
            <section className='py-40 md:py-32'>
                <div className="app-container">
                    <h2
                        className="text-2xl text-gray-600 font-semibold">
                        Free {searchParams.get('q')} Images
                    </h2>
                    {
                        isLoading
                            ? <ImageSkeleton />
                            : data?.pages.map((item, index) => (
                                <ImageContent data={item.results} key={index} />
                            ))
                    }
                    {
                        !isLoading && data?.pages[0].total === 0
                            ? (<span
                                className='text-medium text-gray-700 text-lg'>
                                No Results Found
                            </span>)
                            : (
                                <div
                                    className="flex flex-col w-full items-center mt-5 ">
                                    {isFetchingNextPage ? <Spinner size={50} /> : <></>}
                                    <button
                                        className={'text-sm text-gray-700 border mt-5'
                                            + ' border-gray-400 rounded px-8 py-3'}
                                        onClick={() => { fetchNextPage(); }}
                                        disabled={!hasNextPage}>
                                        Load More
                                    </button>
                                </div>
                            )
                    }
                </div>
            </section>
        </main>
    );
};

export default Home;
