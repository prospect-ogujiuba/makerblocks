# Phase 2: Plan Component

Design state management and props structure before implementation.

## State Planning

### Core State Variables

```jsx
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
```

### Additional State (conditional)

When pagination needed:
```jsx
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(0);
```

When filtering needed:
```jsx
const [filters, setFilters] = useState({});
const [activeFilters, setActiveFilters] = useState([]);
```

When search needed:
```jsx
const [searchTerm, setSearchTerm] = useState('');
```

## Props Structure

Define props with defaults:
```jsx
export default function ComponentName({
    heading = 'Default Heading',
    showSearch = true,
    showFilters = true,
    itemsPerPage = 12
}) {
```

## Decision Application

Map decisions from handoff to implementation:

| Decision | Implementation |
|----------|----------------|
| "Array type for X" | useState([]) + array operations |
| "Multi-select" | Filter by array.includes() |
| "Parallel fetch" | Promise.all() pattern |

## Output

State management plan:
- State variables list
- Props with types and defaults
- Decision implementations
- Dependencies between state
