# Attribute: Array

<when>Multiple selections, lists, repeatable items</when>

## block.json Schema

```json
"attributeName": {
	"type": "array",
	"default": []
}
```

## Common Patterns

### Selected IDs (multi-select)
```json
"selectedIds": {
	"type": "array",
	"default": []
}
```

### Category Filter
```json
"selectedCategories": {
	"type": "array",
	"default": []
}
```

### Repeater Items
```json
"items": {
	"type": "array",
	"default": []
}
```

## Editor Handling

Arrays typically require custom controls:
- Multi-select dropdown
- Checkbox group
- Repeater field with add/remove

## Component Data

Pass as JSON array in component-data:
```php
$component_data = [
	'selectedIds' => $attributes['selectedIds'] ?? [],
];
```
