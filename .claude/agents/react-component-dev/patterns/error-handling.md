# Error Handling Pattern

Loading and error state patterns for block components.

## Loading State

```jsx
if (isLoading) {
    return <SkeletonLoader variant="grid" count={6} />;
}
```

## Error State

```jsx
if (error) {
    return (
        <div className="rounded-2xl bg-red-50 p-8 text-center ring-1 ring-red-200">
            <p className="text-sm text-red-600">{error}</p>
        </div>
    );
}
```

## Empty State

```jsx
if (!data || data.length === 0) {
    return (
        <div className="rounded-2xl bg-slate-50 p-8 text-center ring-1 ring-slate-200">
            <p className="text-sm text-slate-600">No items found.</p>
        </div>
    );
}
```

## Fetch Error Handling

```jsx
fetch(apiUrl, { headers })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    })
    .catch(err => {
        console.error('Fetch error:', err);
        setError(err.message || 'Failed to load data');
        setIsLoading(false);
    });
```

## Validation Error

```jsx
if (!window.siteData?.siteUrl) {
    console.warn('siteData not available, skipping fetch');
    setIsLoading(false);
    return;
}
```
