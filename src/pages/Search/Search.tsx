import type { FC } from 'react';

import { ImageContent } from '@/components/ImageContent';
import { Skeleton } from '@/components/Skeleton';

const Home: FC = () => (
    <main>
        <section className='py-32'>
            <div className="app-container">
                <h2
                    className="text-2xl text-gray-600 font-semibold">
                    Free Abstract Images
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
