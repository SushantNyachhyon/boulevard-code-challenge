import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import Skeleton from './Skeleton';

describe('Skeleton', () => {
    it('should render Skeleton component', () => {
        const { baseElement } = render(<Skeleton />);
        expect(baseElement).toBeTruthy();
    });
});
