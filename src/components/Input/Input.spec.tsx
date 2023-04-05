import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {

    it('should render input component successfully', () => {
        const { getByTestId } = render(
            <Input
                id={'fullName'}
                name={'fullName'}
                value={'Sushant'} />

        );
        const inputEl = getByTestId('input');
        expect(inputEl).toBeTruthy();
    });

    it('should have valid passed props', () => {
        const { getByTestId } = render(
            <Input
                id={'fullName'}
                name={'fullName'}
                value={'Sushant'} />

        );
        const inputEl = getByTestId('input');
        expect(inputEl).toHaveProperty('id', 'fullName');
        expect(inputEl).toHaveProperty('name', 'fullName');
    });

    it('should have initial value and changed value', () => {
        const { getByTestId } = render(
            <Input
                id={'fullName'}
                name={'fullName'}
                value={'Sushant'} />

        );
        const inputEl = getByTestId('input');
        expect(inputEl).toHaveProperty('value', 'Sushant');
        fireEvent.keyPress(inputEl, { target: { value: 'Sus' } });
        expect(inputEl).toHaveProperty('value', 'Sus');
    });
});
