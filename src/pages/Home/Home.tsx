import type { FC } from 'react';

import { Skeleton } from '@/components/Skeleton';
import { Search } from '@/components/Search';
import { ImageContent } from '@/components/ImageContent';
import Styles from './home.module.css';

const Home: FC = () => (
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
                <div className="grid grid-cols-3 gap-10 mt-10">
                    <Skeleton height={400} />
                    <Skeleton height={400} />
                    <Skeleton height={400} />
                    <Skeleton height={400} />
                    <Skeleton height={400} />
                    <Skeleton height={400} />
                    <Skeleton height={400} />
                    <Skeleton height={400} />
                    <Skeleton height={400} />
                </div>
                <ImageContent />
            </div>
        </section>
    </main>
);

export default Home;
