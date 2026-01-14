# Prop Types Pattern

Props definition and destructuring patterns.

## Props Destructuring

```jsx
export default function BlockName({
    heading = 'Default Heading',
    showSearch = true,
    showFilters = true,
    itemsPerPage = 12
}) {
```

## Common Prop Types

| Prop | Type | Default | Usage |
|------|------|---------|-------|
| heading | string | 'Heading' | Section title |
| showSearch | boolean | true | Toggle search bar |
| showFilters | boolean | true | Toggle filter panel |
| itemsPerPage | number | 12 | Pagination size |
| displayStyle | string | 'grid' | Layout variant |
| ctaText | string | 'Learn More' | Button text |
| ctaUrl | string | '/contact' | Button link |

## JSDoc Documentation

```jsx
/**
 * Services Grid Component
 *
 * @param {object} props - Component props from PHP
 * @param {string} props.heading - Section heading
 * @param {boolean} props.showSearch - Show search bar
 * @param {boolean} props.showFilters - Show filter panel
 * @param {number} props.itemsPerPage - Items per page
 */
```

## From Handoff

Map `component_data_shape` to props:
```yaml
component_data_shape:
  endpoint: string     # Not a prop (internal)
  nonce: string        # Not a prop (internal)
  showSearch: boolean  # Prop with default
  itemsPerPage: number # Prop with default
```
