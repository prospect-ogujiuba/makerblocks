# Component Structure Pattern

Basic functional component template for Gutenberg blocks.

## Template

```jsx
import { useEffect, useState } from 'react';

/**
 * Block Component
 *
 * @param {object} props - Component props from PHP
 * @param {string} props.heading - Heading text
 * @param {boolean} props.showFeature - Feature flag
 */
export default function BlockName({
    heading = 'Default Heading',
    showFeature = true
}) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Data fetching logic
    }, []);

    if (isLoading) {
        return /* Loading skeleton */;
    }

    if (error) {
        return /* Error state */;
    }

    if (!data || data.length === 0) {
        return /* Empty state */;
    }

    return (
        <div>
            {/* Main content */}
        </div>
    );
}
```

## Key Points

- Functional component with hooks
- Props destructured with defaults
- State for data, loading, error
- Conditional rendering order: loading → error → empty → content
- JSDoc for prop documentation
