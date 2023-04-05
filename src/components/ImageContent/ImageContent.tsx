import type { FC } from 'react';

import Image from '@/components/Image/Image';
import { IUnsplash } from '@/types/unsplash.type';

const ImageContent: FC<{ data: IUnsplash }> = (props) => (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
        {
            props.data.results.map(image => (
                <Image 
                    key={image.id} 
                    data={image} />
            ))
        }
    </div>
);

export default ImageContent;
