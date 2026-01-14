# Async Testing Patterns

waitFor, act, and async patterns.

## waitFor

```jsx
import { waitFor } from '@testing-library/react';

await waitFor(() => {
    expect(screen.getByText('Loaded')).toBeInTheDocument();
});

// With timeout
await waitFor(() => {
    expect(element).toBeVisible();
}, { timeout: 3000 });
```

## findBy Queries

```jsx
// Combines getBy + waitFor
const element = await screen.findByText('Loaded');
expect(element).toBeInTheDocument();
```

## Loading States

```jsx
it('shows loading state initially', () => {
    global.fetch.mockImplementation(() => new Promise(() => {}));

    render(<Component />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

it('shows data after fetch', async () => {
    global.fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ data: mockData }),
    });

    render(<Component />);

    await waitFor(() => {
        expect(screen.getByText('Data Title')).toBeInTheDocument();
    });
});
```

## Hook Testing

```jsx
import { renderHook, waitFor } from '@testing-library/react';

const { result } = renderHook(() => useCustomHook(1));

await waitFor(() => {
    expect(result.current.isLoading).toBe(false);
});
```
