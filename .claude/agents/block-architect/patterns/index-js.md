# Pattern: index.js

<when>Always - required for every block</when>

## Template

```javascript
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: Edit,
} );
```

## Notes

- Standard template, no customization needed
- Imports Edit component from edit.js
- Uses metadata.name from block.json
- No save function (server-side rendering via render.php)
