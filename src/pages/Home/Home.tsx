import type { FC } from 'react';

import { useUnsplashTopQuery } from '@/queries/unsplash.query';
import { Search } from '@/components/Search';
import { ImageContent } from '@/components/ImageContent';
import { ImageSkeleton } from '@/components/ImageSkeleton';
import Spinner from '@/components/Spinner/Spinner';
import Styles from './home.module.css';

const Home: FC = () => {
    const {
        data,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage
    } = useUnsplashTopQuery(1);

    return (
        <main>
            <section
                className={Styles.landingSection}>
                <div
                    className="app-container">
                    <div
                        className={Styles.landingContainer}>
                        <h1
                            className={Styles.landingHeading}>
                            Boulevard
                        </h1>
                        <span
                            className={Styles.landingSubHeading}>
                            Search Your Imagination
                        </span>
                        <Search
                            classList='mt-10'
                            inputClass={'!h-14'}
                            iconSize={26} />
                        <span
                            className={Styles.helperText}>
                            Powered by {' '}
                            <a
                                href="https://unsplash.com"
                                target="_blank">
                                Unsplash
                            </a>
                        </span>
                    </div>
                </div>
            </section>
            <section className='py-20'>
                <div className="app-container">
                    <h2
                        className="text-2xl text-gray-600 font-semibold">
                        Browse Our Top Picks
                    </h2>
                    {
                        isLoading
                            ? <ImageSkeleton />
                            : data?.pages.map((item, index) => (
                                <ImageContent data={item} key={index} />
                            ))
                    }
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
                </div>
            </section>
        </main>
    );
};

export default Home;
