# Attribute: Number

<when>Counts, limits, dimensions, ranges</when>

## block.json Schema

```json
"attributeName": {
	"type": "number",
	"default": 12
}
```

## Common Patterns

### Item Count
```json
"itemsPerPage": {
	"type": "number",
	"default": 12
}
```

### Column Count
```json
"columns": {
	"type": "number",
	"default": 3
}
```

### Spacing/Size
```json
"gap": {
	"type": "number",
	"default": 24
}
```

## Editor Control

```javascript
<RangeControl
	label={__("Items Per Page", "makerblocks")}
	value={itemsPerPage}
	onChange={(value) => setAttributes({ itemsPerPage: value })}
	min={1}
	max={50}
/>
```
