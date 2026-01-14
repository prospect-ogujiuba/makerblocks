# Pattern: block.json

<when>Always - required for every block</when>

## Template

```json
{
	"$schema": "https://schemas.wp.org/trunk/block.json",
	"apiVersion": 3,
	"name": "makerblocks/{block-name}",
	"version": "0.1.0",
	"title": "{Block Title}",
	"category": "{category}",
	"icon": "{icon}",
	"description": "{Block description}",
	"example": {},
	"attributes": {
		{attributes_schema}
	},
	"supports": {
		"html": false
	},
	"textdomain": "makerblocks",
	"editorScript": "file:./index.js",
	"render": "file:./render.php"
}
```

## Placeholders

- `{block-name}`: kebab-case from block_spec
- `{Block Title}`: Human-readable title
- `{category}`: makerblocks | makerblocks-layout | makerblocks-templates
- `{icon}`: Dashicons name (default: "insert")
- `{attributes_schema}`: From Phase 2

## Critical Rules

- MUST use apiVersion 3 (NEVER 1 or 2)
- MUST use "file:./render.php" for server-side rendering
- MUST include textdomain: "makerblocks"
