import type { FC } from 'react';

import Image from '@/assets/images/image.jpg';

const ImageContent: FC = () => (
    <div className='grid grid-cols-3 gap-10 mt-10'>
        <img src={Image} className="w-full h-96 object-cover" />
        <img src={Image} className="w-full h-96 object-cover" />
        <img src={Image} className="w-full h-96 object-cover" />
        <img src={Image} className="w-full h-96 object-cover" />
        <img src={Image} className="w-full h-96 object-cover" />
        <img src={Image} className="w-full h-96 object-cover" />
    </div>
);

export default ImageContent;
