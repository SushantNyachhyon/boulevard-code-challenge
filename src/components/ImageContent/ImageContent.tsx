import type { FC } from 'react';
import { useState } from 'react';

import Image from '@/components/Image/Image';
import Modal from '@/components/Modal/Modal';
import { IUnsplash , IResult } from '@/types/unsplash.type';

const ImageContent: FC<{ data: IResult[] }> = (props) => {
    const [show, setShow] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    return (
        <>
            <Modal
                show={show}
                onClose={() => { setShow(false); }}>
                <img
                    src={imgSrc}
                    className='w-full h-auto max-h-[80vh] object-contain' />
            </Modal>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    props.data.map(image => (
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
