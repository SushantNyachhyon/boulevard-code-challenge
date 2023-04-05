import type { FC } from 'react';
import { useEffect, useMemo, useRef } from 'react';
import { decode } from 'blurhash';

import type { IResult } from '@/types/unsplash.type';

const Image: FC<{ data: IResult }> = (props) => {
    const imageRef = useRef<HTMLImageElement>(null);
    const width = 500;
    const height = 350;
    const punch = 1;

    const observer = useMemo(() => new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting)
                (entry.target as HTMLImageElement).src = props.data.urls.small;
        }
    ), [imageRef]);

    const createBlurImage = () => {
        const pexels = decode(props.data.blur_hash, width, height, punch);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const data = ctx?.createImageData(width, height);
        data?.data.set(pexels);
        ctx?.putImageData(data as ImageData, 0, 0);
        if (imageRef.current)
            imageRef.current.src = canvas.toDataURL('image/png');
    };


    useEffect(() => {
        createBlurImage();
        observer.observe(imageRef.current as HTMLImageElement);
        return () => observer.disconnect();
    }, []);

    return (
        <img
            ref={imageRef}
            src=''
            className="w-full h-[350px] object-cover" />
    );
};

export default Image;
