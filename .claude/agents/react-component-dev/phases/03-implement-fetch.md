# Phase 3: Implement Fetch

Implement data fetching based on data_source configuration.

## Pattern Loading

Load based on conditions:
- `data_source.dynamic == true` → Load patterns/rest-fetch.md
- `ui_features.includes('pagination')` → Load patterns/pagination.md

## Base Fetch Pattern

```jsx
useEffect(() => {
    if (!window.siteData?.siteUrl) {
        console.warn('siteData not available, skipping fetch');
        setIsLoading(false);
        return;
    }

    const apiUrl = `${window.siteData.siteUrl}/tr-api/rest/{resource}`;

    fetch(apiUrl, {
        headers: {
            'X-TypeRocket-Nonce': window.siteData?.nonce || ''
        }
    })
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch');
            return response.json();
        })
        .then(response => {
            setData(response.data || []);
            setIsLoading(false);
        })
        .catch(err => {
            setError(err.message || 'Failed to load');
            setIsLoading(false);
        });
}, []);
```

## Parallel Fetch (multiple endpoints)

```jsx
Promise.all([
    fetch(`${baseUrl}/tr-api/rest/resource1`, { headers }),
    fetch(`${baseUrl}/tr-api/rest/resource2`, { headers })
])
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(([data1, data2]) => {
        setResource1(data1.data || []);
        setResource2(data2.data || []);
        setIsLoading(false);
    });
```

## Data Normalization

```jsx
const normalized = rawData.map(item => ({
    ...item,
    id: parseInt(item.id, 10),
    // Handle snake_case/camelCase variations
    service_type: item.service_type || item.serviceType
}));
```

## Output

Implemented useEffect with:
- Validation check
- Fetch with auth headers
- Response envelope extraction
- Error handling
- Loading state management
