import type { FC } from 'react';

import { Search } from '@/components/Search';
import { ImageContent } from '@/components/ImageContent';
import { ImageSkeleton } from '@/components/ImageSkeleton';
import Styles from './home.module.css';
import { data } from '@/data';

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
                <ImageSkeleton />
                <ImageContent data={data} />
            </div>
        </section>
    </main>
);

export default Home;
