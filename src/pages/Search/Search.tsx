import type { FC } from 'react';

import { ImageContent } from '@/components/ImageContent';
import { ImageSkeleton } from '@/components/ImageSkeleton';
import { data } from '@/data';

const Home: FC = () => (
    <main>
        <section className='py-32'>
            <div className="app-container">
                <h2
                    className="text-2xl text-gray-600 font-semibold">
                    Free Abstract Images
                </h2>
                <ImageSkeleton />
                <ImageContent data={data} />
            </div>
        </section>
    </main>
);

export default Home;
