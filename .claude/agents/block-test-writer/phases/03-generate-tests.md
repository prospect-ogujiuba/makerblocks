# Phase 3: Generate Tests

Generate the final test file.

## File Structure

```jsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Component from '../Component';

// Mocks
jest.mock('...');

describe('Component', () => {
    const defaultProps = {...};

    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Test cases
});
```

## Output Location

```
src/blocks-dev/{block-name}/__tests__/{Component}.test.jsx
```

## Test Naming Convention

- `it('renders without crashing')`
- `it('displays loading state initially')`
- `it('shows error on fetch failure')`
- `it('calls onSelect when clicked')`

## Checklist

- [ ] Imports from @testing-library/react
- [ ] userEvent for interactions
- [ ] Mocks for WordPress/fetch
- [ ] beforeEach with clearAllMocks
- [ ] Covers all focus areas
- [ ] Edge cases included
