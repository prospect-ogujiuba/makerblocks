# Attribute: Object

<when>Complex data structures, media items, nested properties</when>

## block.json Schema

```json
"attributeName": {
	"type": "object",
	"default": {}
}
```

## Common Patterns

### Media/Image
```json
"backgroundImage": {
	"type": "object",
	"default": {
		"id": 0,
		"url": "",
		"alt": ""
	}
}
```

### Link with Text
```json
"ctaLink": {
	"type": "object",
	"default": {
		"url": "#",
		"text": "Learn More",
		"newTab": false
	}
}
```

### Configuration Object
```json
"filterConfig": {
	"type": "object",
	"default": {
		"showCategory": true,
		"showType": true,
		"showSearch": false
	}
}
```

## Editor Control

Use MediaUpload for images, custom UI for other objects.
