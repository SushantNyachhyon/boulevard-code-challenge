import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Search from './Search';


describe('Search', () => {
    it('should render Search component successfully', () => {
        const { baseElement } = render(
            <MemoryRouter>
                <Search />
            </MemoryRouter>
        );
        expect(baseElement).toBeTruthy();
    });
});
