import type { FC } from 'react';
import { useState, useEffect, useMemo, useRef } from 'react';
import { Blurhash } from 'react-blurhash';
import type { IResult } from '@/types/unsplash.type';

const Image: FC<{ data: IResult }> = (props) => {
    const imageContainer = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);

    const observer = useMemo(() => new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting)
                setLoading(false);
        }
    ), [imageContainer]);


    useEffect(() => {
        observer.observe(imageContainer.current as HTMLDivElement);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={imageContainer}>
            {
                loading
                    ? <Blurhash
                        hash={props.data.blur_hash}
                        width={'100%'}
                        height={350}
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    />
                    : <img
                        src={props.data.urls.small}
                        className="w-full h-[350px] object-cover" />
            }
        </div>
    );
};

export default Image;
