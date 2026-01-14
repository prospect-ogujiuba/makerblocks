# Pagination Pattern

Paginated data handling for block components.

## State

```jsx
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(0);
const itemsPerPage = 12; // From props
```

## Fetch with Pagination

```jsx
useEffect(() => {
    const apiUrl = `${window.siteData.siteUrl}/tr-api/rest/resource?page=${currentPage}&per_page=${itemsPerPage}`;

    fetch(apiUrl, { headers })
        .then(response => response.json())
        .then(response => {
            setData(response.data || []);
            setTotalPages(Math.ceil(response.meta.total / itemsPerPage));
            setIsLoading(false);
        });
}, [currentPage, itemsPerPage]);
```

## Client-Side Pagination

```jsx
const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredData.slice(start, end);
}, [filteredData, currentPage, itemsPerPage]);

const totalPages = Math.ceil(filteredData.length / itemsPerPage);
```

## Pagination Component

```jsx
import { Pagination } from '../../components';

<Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={setCurrentPage}
/>
```

## Reset on Filter Change

```jsx
useEffect(() => {
    setCurrentPage(1);
}, [filters, searchTerm]);
```
