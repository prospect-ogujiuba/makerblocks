# State Management Pattern

React 18 state patterns for Gutenberg block components.

## Core State

```jsx
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
```

## Pagination State

```jsx
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(0);
const [itemsPerPage] = useState(12);
```

## Filter State

```jsx
const [filters, setFilters] = useState({
    category: null,
    type: null
});

const [activeFilters, setActiveFilters] = useState([]);
```

## Search State

```jsx
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearch = useMemo(
    () => debounce(setSearchTerm, 300),
    []
);
```

## Array Selection State

```jsx
const [selectedIds, setSelectedIds] = useState([]);

const toggleSelection = (id) => {
    setSelectedIds(prev =>
        prev.includes(id)
            ? prev.filter(i => i !== id)
            : [...prev, id]
    );
};
```

## State Dependencies

Use `useMemo` for derived state:
```jsx
const filteredData = useMemo(() => {
    return data.filter(item => {
        if (filters.category && item.category !== filters.category) return false;
        if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        return true;
    });
}, [data, filters, searchTerm]);
```
