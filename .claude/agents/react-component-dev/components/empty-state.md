# Empty State Component

Empty state rendering when no data available.

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

## Shared Component

```jsx
import { EmptyState } from '../../components';

<EmptyState message="No items found" />
```

## With Section Wrapper

```jsx
if (!hasData) {
    return (
        <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="rounded-2xl bg-slate-50 p-8 text-center ring-1 ring-slate-200">
                    <p className="text-sm text-slate-600">
                        No team members found yet.
                    </p>
                </div>
            </div>
        </section>
    );
}
```

## Empty State Styling

- Background: `bg-slate-50`
- Border: `ring-1 ring-slate-200`
- Text: `text-slate-600`
- Padding: `p-8`
- Shape: `rounded-2xl`
- Alignment: `text-center`

## Contextual Messages

| Context | Message |
|---------|---------|
| Teams | "No team members found yet." |
| Services | "No services available." |
| Search | "No results match your search." |
| Filtered | "No items match your filters." |
