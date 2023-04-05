import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Header from './Header';


describe('Search', () => {
    it('should render Search component successfully', () => {
        const { baseElement } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        expect(baseElement).toBeTruthy();
    });
});
