import { FC } from 'react';
import styles from './spinner.module.css';

type SpinnerProps = {
    color?: string;
    size?: number;
    className?: string;
};

const defaultProps = {
    color: '#1D3277',
    size: 20,
    className: ''
};

const Spinner: FC<SpinnerProps> = props => {
    const style = {
        width: `${props.size}px`,
        height: `${props.size}px`,
        borderTop: `2px solid ${props.color}`,
        borderRight: `2px solid ${props.color}`,
        borderBottom: `2px solid ${props.color}`
    };

    return (
        <div className={`${styles.spinner} ${props.className}`} style={style} />
    );
};

Spinner.defaultProps = defaultProps;

export default Spinner;
