# Loading Skeleton Component

Skeleton loader patterns for loading states.

## Shared Component

```jsx
import { SkeletonLoader } from '../../components';

<SkeletonLoader variant="grid" count={6} />
```

Variants: `card`, `hero`, `grid`, `form`

## Custom Inline Skeleton

```jsx
if (isLoading) {
    return (
        <div className="animate-pulse">
            <div className="space-y-4">
                <div className="h-8 bg-slate-200 rounded w-1/3"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-white rounded-lg p-6 space-y-4">
                            <div className="h-40 bg-slate-200 rounded"></div>
                            <div className="h-6 bg-slate-200 rounded w-3/4"></div>
                            <div className="h-4 bg-slate-200 rounded w-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
```

## Card Skeleton

```jsx
<CardSkeleton count={3} />
```

## List Skeleton

```jsx
<ListItemSkeleton count={5} />
```

## When to Use

- `SkeletonLoader` for standard patterns
- Custom inline for exact layout matching
- `CardSkeleton` / `ListItemSkeleton` for simple cases
