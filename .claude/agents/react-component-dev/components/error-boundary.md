# Error Boundary Pattern

Error state rendering for block components.

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

## With Section Wrapper

```jsx
if (error) {
    return (
        <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="rounded-2xl bg-red-50 p-8 text-center ring-1 ring-red-200">
                    <p className="text-sm text-red-600">{error}</p>
                </div>
            </div>
        </section>
    );
}
```

## Error State Styling

- Background: `bg-red-50`
- Border: `ring-1 ring-red-200`
- Text: `text-red-600`
- Padding: `p-8`
- Shape: `rounded-2xl`
- Alignment: `text-center`

## Error Message Patterns

```jsx
// Generic
setError('Failed to load data');

// Specific
setError('Failed to fetch team members');

// From catch
setError(err.message || 'An error occurred');
```
