import type { FC, ChangeEventHandler, KeyboardEventHandler } from 'react';
import style from './input.module.css';

type InputProps = {
    id?: string;
    name?: string;
    type?: string;
    value?: string | number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
    placeholder?: string;
    autoFocus?: boolean;
    classList?: string;
    disabled?: boolean;
};
const defaultProps = {
    id: '',
    name: '',
    type: 'text',
    value: '',
    onChange: () => { return; },
    onKeyUp: () => { return; },
    placeholder: '',
    autoFocus: false,
    disabled: false
};

const Input: FC<InputProps> = props => (
    <input
        type={props.type}
        id={props.id}
        name={props.name}
        className={`${style.input} ${props.classList}`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
        autoFocus={props.autoFocus}
        autoComplete="new-password"
        disabled={props.disabled}
        data-testid='input'
    />
);

Input.defaultProps = defaultProps;

export default Input;
