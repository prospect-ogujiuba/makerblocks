# Makerblocks Quickstart

## Create a Gutenberg Block

**Prompt:**
```
Create a block to display {content} from {data source}
```

**Execution flow:**
```
block-architect → block.json + structure + render.php
    ↓
PARALLEL:
├─ react-component-dev → {BlockName}.jsx (frontend component)
└─ block-editor-ux → edit.js (editor controls)
```

## Prompt Tips

### Specify data source:
```
✓ "Display services from /tr-api/rest/service endpoint"
✓ "Show equipment grid fetching from REST API with category filter"

✗ "Display some services"
```

### Describe UI needs:
```
✓ "Grid layout with loading skeleton, pagination, category filter dropdown"
✓ "Carousel with autoplay toggle, 3 items visible"

✗ "Show items in a nice way"
```

### Request controls:
```
✓ "Editor controls: items per page (range 3-12), show featured only (toggle)"
✓ "Inspector panel with category select and layout options"
```

## Single-Agent Tasks

| Task | Prompt |
|------|--------|
| Add block structure | "Add block structure for {name}" |
| Add React component | "Add component for {block} to display {data}" |
| Add editor controls | "Add {control type} for {attribute} in {block}" |

## File Locations

```
src/blocks-dev/{block-name}/
├── block.json         → Block registration + attributes
├── index.js           → Entry point
├── edit.js            → Editor component
├── {BlockName}.jsx    → Frontend React component
└── render.php         → Server-side render

src/components/        → Shared components
src/scripts/MakerBlocks.js → Block registry
```

## Common Patterns

### REST Fetch:
```jsx
const response = await fetch(`${window.siteData.apiBase}/tr-api/rest/service`, {
  headers: { 'X-TypeRocket-Nonce': window.siteData.nonce }
});
```

### Loading State:
```jsx
import SkeletonLoader from '../../components/SkeletonLoader';
if (loading) return <SkeletonLoader count={itemsPerPage} />;
```

### Empty State:
```jsx
if (!items.length) return <EmptyState message="No items found" />;
```
