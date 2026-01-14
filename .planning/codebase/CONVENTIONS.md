# Coding Conventions

**Analysis Date:** 2026-01-06

## Naming Patterns

**Files:**
- `PascalCase.jsx` for React components (`Services.jsx`, `ContactForm.jsx`)
- `kebab-case` for block directories (`service-bundles/`, `contact-hero/`)
- `snake_case.php` for PHP files (`enqueue_assets.php`, `wp_localize.php`)
- `camelCase.js` for utilities (`contactUtils.js`, `formatters.js`)

**Functions:**
- camelCase for JavaScript (`parseComponentProps()`, `validateContactParams()`)
- snake_case for PHP (`makerblocks_register_asset()`, `makerblocks_get_custom_blocks()`)
- PascalCase for React components (`Services`, `ContactForm`, `Badge`)

**Variables:**
- camelCase for JavaScript (`showSearch`, `itemsPerPage`, `isLoading`)
- snake_case for PHP (`$show_search`, `$component_data`)
- Boolean prefixes: `is`, `has`, `show` (`isLoading`, `showSearch`)

**Types:**
- SCREAMING_SNAKE_CASE for constants (`MAKERBLOCKS_PLUGIN_DIR`, `REQUIRED_FILES`)
- Block names: `makerblocks/{block-name}` (kebab-case with namespace)

## Code Style

**Formatting:**
- EditorConfig for base rules (`.editorconfig`)
- PHP: Tab indentation
- JavaScript/JSX: 4-space indentation
- YAML: 2-space indentation
- Trailing newlines required, LF line endings

**Linting:**
- @wordpress/scripts (ESLint + Stylelint)
- Run: `npm run lint:js`, `npm run lint:css`
- Format: `npm run format`
- No explicit .eslintrc (uses wp-scripts defaults)

## Import Organization

**Order:**
1. React/WordPress packages (`import { useState } from 'react'`)
2. Third-party packages (`import { Dialog } from '@headlessui/react'`)
3. Internal components (`import { Button, Badge } from '../../components'`)
4. Relative imports (`./components/ServiceCard`)

**Grouping:**
- Blank line between groups
- Destructured imports preferred

**Path Aliases:**
- Relative paths used (`../../components`, `../utils`)
- No @ or ~ aliases configured

## Error Handling

**Patterns:**
- Fetch chains use `.catch()` with error state
- Try/catch at hydration level (`src/scripts/MakerBlocks.js`)
- Promise.reject for propagating errors in chains

**Error Types:**
- Set error state in component (`setError(err.message)`)
- Log to console (`console.error`)
- Render error UI (error message display)

## Logging

**Framework:**
- Browser console only (`console.log`, `console.error`)
- No structured logging library

**Patterns:**
- Debug logs commented out in production
- Errors logged with context where possible
- No server-side logging from plugin

## Comments

**When to Comment:**
- JSDoc for component props and utility functions
- Avoid inline comments (per CLAUDE.md: "Do not add comments to code")
- Self-documenting names preferred

**JSDoc/TSDoc:**
```javascript
/**
 * Button Component - Shared button with standardized variants
 * @param {object} props - Component props
 * @param {string} props.variant - Button variant
 * @returns {React.ReactNode}
 */
```

**TODO Comments:**
- None found in codebase (clean)

## Function Design

**Size:**
- Most functions under 50 lines
- Large components (1000+ lines) exist but need refactoring

**Parameters:**
- Destructured props in React components
- Options objects for complex functions

**Return Values:**
- Explicit returns preferred
- Early return for guard clauses

## Module Design

**Exports:**
- Named exports for utilities and components
- Default export for main block component
- Barrel exports via `index.js`

**Block Structure (5-file pattern):**
```
block-name/
├── block.json      # Metadata, attributes
├── index.js        # registerBlockType()
├── edit.js         # Editor (imports {BlockName}.jsx)
├── {BlockName}.jsx # Shared React component
└── render.php      # Server render
```

**Barrel Files:**
- `src/components/index.js` re-exports all components
- `src/utils/index.js` re-exports utilities

## React Patterns

**State Management:**
```javascript
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
const [data, setData] = useState([]);
```

**Data Fetching:**
```javascript
useEffect(() => {
    fetch(url, { headers: { 'X-TypeRocket-Nonce': nonce } })
        .then(r => r.json())
        .then(data => setData(data.data || []))
        .catch(err => setError(err.message))
        .finally(() => setIsLoading(false));
}, []);
```

## PHP Patterns

**Block Rendering:**
```php
$component_data = ['key' => $attributes['value']];
<section <?php echo get_block_wrapper_attributes(['class' => 'mx-auto']); ?>>
    <div id="makerblocks-{block}"
         component-data="<?php echo esc_attr(wp_json_encode($component_data)); ?>">
    </div>
</section>
```

**Asset Registration:**
```php
function makerblocks_register_asset($handle, $path, $deps = []) {
    $asset_file = MAKERBLOCKS_PLUGIN_DIR . $path . '.asset.php';
    // ...
}
```

---

*Convention analysis: 2026-01-06*
*Update when patterns change*
