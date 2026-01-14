# Attribute: Boolean

<when>Toggle features, show/hide options</when>

## block.json Schema

```json
"attributeName": {
	"type": "boolean",
	"default": true
}
```

## Common Patterns

### Feature Toggle
```json
"showSearch": {
	"type": "boolean",
	"default": true
}
```

### Visibility Control
```json
"showFilters": {
	"type": "boolean",
	"default": true
}
```

### Behavior Flag
```json
"autoPlay": {
	"type": "boolean",
	"default": false
}
```

## Editor Control

```javascript
<ToggleControl
	label={__("Show Search", "makerblocks")}
	checked={showSearch}
	onChange={(value) => setAttributes({ showSearch: value })}
/>
```
