import type { FC } from 'react';
import Skeleton from '../Skeleton/Skeleton';

const ImageSkeleton: FC = () => {
    return (
        <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <Skeleton height={350} />
            <Skeleton height={350} />
            <Skeleton height={350} />
            <Skeleton height={350} />
            <Skeleton height={350} />
            <Skeleton height={350} />
        </div>

    );
};

export default ImageSkeleton;
