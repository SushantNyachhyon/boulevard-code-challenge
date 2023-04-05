import type { FC } from 'react';
import { useState } from 'react';

import Image from '@/components/Image/Image';
import Modal from '@/components/Modal/Modal';
import { IUnsplash } from '@/types/unsplash.type';

const ImageContent: FC<{ data: IUnsplash }> = (props) => {
    const [show, setShow] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    return (
        <>
            <Modal
                show={show}
                onClose={() => { setShow(false); }}>
                <img src={imgSrc} className='f-full h-full object-contain' />
            </Modal>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    props.data.results.map(image => (
                        <a
                            href="#"
                            key={image.id}
                            onClick={(e) => {
                                e.preventDefault();
                                setShow(true);
                                setImgSrc(image.urls.raw);
                            }}>
                            <Image
                                data={image} />

                        </a>
                    ))
                }
            </div>
        </>
    );
};

export default ImageContent;
