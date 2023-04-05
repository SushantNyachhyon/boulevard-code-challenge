import type { FC } from 'react';
import { useMemo } from 'react';
import './skeleton.css';

type SkeletonProps = {
    width?: string | number;
    height?: string | number;
    className?: string;
};

const Skeleton: FC<SkeletonProps> = ({ width, height, className }) => {
    const _width = useMemo(
        () => (typeof width === 'string' ? width : width + 'px'),
        []
    );
    const _height = useMemo(
        () => (typeof width === 'string' ? height : height + 'px'),
        []
    );

    return (
        <div
            className={`skeleton ${className}`}
            style={{
                width: _width,
                height: _height
            }}
        />
    );
};

Skeleton.defaultProps = {
    width: '100%',
    height: 10,
    className: ''
};

export default Skeleton;
