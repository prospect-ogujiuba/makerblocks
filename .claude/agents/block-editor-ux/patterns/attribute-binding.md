# Attribute Binding Patterns

setAttributes patterns for attribute management.

## Single Source of Truth

Attributes defined ONLY in block.json:
```json
{
    "attributes": {
        "heading": { "type": "string", "default": "Welcome" },
        "showStats": { "type": "boolean", "default": true }
    }
}
```

In edit.js - NO redefinition:
```jsx
export default function Edit({ attributes, setAttributes }) {
    const { heading, showStats } = attributes;
    // Use destructured values
}
```

## Single Attribute Update

```jsx
setAttributes({ heading: newValue });
```

## Multiple Attributes

```jsx
setAttributes({
    heading: newHeading,
    showStats: true
});
```

## Nested Object (Media)

```jsx
setAttributes({
    backgroundImage: {
        id: media.id,
        url: media.url,
        alt: media.alt
    }
});
```

## Array Update

```jsx
// Add item
setAttributes({
    selectedIds: [...selectedIds, newId]
});

// Remove item
setAttributes({
    selectedIds: selectedIds.filter(id => id !== removeId)
});
```

## Computed from Value

```jsx
onChange={(value) => setAttributes({
    categoryId: parseInt(value) || null
})}
```
