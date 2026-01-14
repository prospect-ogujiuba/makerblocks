# Test Structure Pattern

Basic Jest test file structure.

## Template

```jsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ComponentName from '../ComponentName';

describe('ComponentName', () => {

    const defaultProps = {
        propA: 'value',
        propB: true,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        render(<ComponentName {...defaultProps} />);
        expect(screen.getByRole('article')).toBeInTheDocument();
    });

    it('applies className prop', () => {
        render(<ComponentName {...defaultProps} className="custom" />);
        expect(screen.getByRole('article')).toHaveClass('custom');
    });

});
```

## Organization

```
describe('ComponentName', () => {
    describe('rendering', () => {...});
    describe('props', () => {...});
    describe('interactions', () => {...});
    describe('data fetching', () => {...});
});
```

## Setup/Teardown

```jsx
beforeAll(() => { /* one-time setup */ });
afterAll(() => { /* one-time cleanup */ });
beforeEach(() => { jest.clearAllMocks(); });
afterEach(() => { /* per-test cleanup */ });
```
