import type { 
    ChangeEventHandler, 
    KeyboardEventHandler, 
    FocusEventHandler ,
} from 'react';
import { forwardRef } from 'react';
import style from './input.module.css';

type InputProps = {
    id?: string;
    name?: string;
    type?: string;
    value?: string | number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
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
    onFocus: () => { return; },
    onBlur: () => { return; },
    placeholder: '',
    autoFocus: false,
    disabled: false
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <input
        type={props.type}
        id={props.id}
        name={props.name}
        className={`${style.input} ${props.classList}`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        autoFocus={props.autoFocus}
        autoComplete="new-password"
        disabled={props.disabled}
        data-testid='input'
        ref={ref}
    />
));

Input.defaultProps = defaultProps;

export default Input;
