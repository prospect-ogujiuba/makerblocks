# Phase 4: Generate Component

Generate the final React component file.

## File Structure

```jsx
import { useEffect, useState } from 'react';
// Shared component imports based on needs

/**
 * Component JSDoc
 * @param {object} props
 */
export default function ComponentName({ props }) {
    // State declarations
    // useEffect for data fetching
    // Loading state render
    // Error state render
    // Empty state render
    // Main render
}
```

## Render Order

1. **Loading state** (isLoading === true)
2. **Error state** (error !== null)
3. **Empty state** (data.length === 0)
4. **Main content** (data.length > 0)

## Shared Component Usage

```jsx
import {
    SkeletonLoader,
    EmptyState,
    Pagination,
    SearchBar,
    FilterPanel
} from '../../components';
```

## Output Location

```
src/blocks-dev/{block-name}/{BlockName}.jsx
```

## Checklist

- [ ] React 18 hooks used correctly
- [ ] window.siteData validated
- [ ] X-TypeRocket-Nonce header included
- [ ] Loading state implemented
- [ ] Error state implemented
- [ ] Empty state implemented
- [ ] Props destructured with defaults
- [ ] JSDoc comments added
- [ ] Tailwind CSS classes used
