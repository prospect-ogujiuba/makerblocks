# Coding Conventions

**Analysis Date:** 2026-01-18

## Naming Patterns

**Files:**
- `PascalCase.tsx` for React components (`Header.tsx`, `Services.tsx`)
- `kebab-case.tsx` for Shadcn UI components (`dropdown-menu.tsx`, `sheet.tsx`)
- `kebab-case` for block directories (`service-bundles/`, `contact-hero/`)
- `snake_case.php` for PHP files (`enqueue_assets.php`, `wp_localize.php`)
- `camelCase.ts` for utilities (`utils.ts`, `api.ts`)

**Functions:**
- camelCase for TypeScript/JavaScript (`parseComponentProps()`, `validateContactParams()`)
- snake_case for PHP (`makerblocks_register_asset()`, `makerblocks_get_custom_blocks()`)
- PascalCase for React components (`Header`, `Services`, `Badge`)

**Variables:**
- camelCase for TypeScript/JavaScript (`showSearch`, `itemsPerPage`, `isLoading`)
- snake_case for PHP (`$show_search`, `$component_data`)
- Boolean prefixes: `is`, `has`, `show` (`isLoading`, `showSearch`)

**Types:**
- PascalCase for interfaces and types (`SiteData`, `ApiResponse`, `BlockAttributes`)
- SCREAMING_SNAKE_CASE for constants (`MAKERBLOCKS_PLUGIN_DIR`, `REQUIRED_FILES`)
- Block names: `makerblocks/{block-name}` (kebab-case with namespace)

## Code Style

**Formatting:**
- EditorConfig for base rules (`.editorconfig`)
- PHP: Tab indentation
- TypeScript/TSX: 4-space indentation
- YAML: 2-space indentation
- Trailing newlines required, LF line endings

**TypeScript:**
- Strict mode enabled (`"strict": true`)
- No implicit any
- Explicit return types for public functions
- Interface over type for object shapes

**Linting:**
- @wordpress/scripts (ESLint + Stylelint)
- Run: `npm run lint:js`, `npm run lint:css`
- Format: `npm run format`
- No explicit .eslintrc (uses wp-scripts defaults)

## Import Organization

**Order:**
1. React/WordPress packages (`import { useState } from 'react'`)
2. Third-party packages (`import { Sheet } from '../components/ui/sheet'`)
3. Internal components (`import { Button, Badge } from '../components'`)
4. Relative imports (`./components/ServiceCard`)
5. Type imports (`import type { User } from '../types'`)

**Grouping:**
- Blank line between groups
- Destructured imports preferred

**Path Aliases:**
- `@/*` configured in tsconfig.json but **NOT supported by wp-scripts**
- Use relative paths: `../../components`, `../lib/utils`
- This is a known limitation - do not use @ imports

## Type Patterns

**Component Props:**
```typescript
interface HeaderProps {
  title: string;
  showNav?: boolean;
  onNavigate?: (path: string) => void;
}

export function Header({ title, showNav = true, onNavigate }: HeaderProps) {
  // ...
}
```

**API Responses:**
```typescript
interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}
```

**Window Extensions:**
```typescript
// src/types/global.d.ts
declare global {
  interface Window {
    siteData: {
      siteUrl: string;
      nonce: string;
      restNonce: string;
    };
  }
}
```

## Error Handling

**Patterns:**
- Fetch chains use `.catch()` with error state
- Try/catch at hydration level (`src/scripts/MakerBlocks.tsx`)
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
- TSDoc for component props and utility functions
- Avoid inline comments (per CLAUDE.md: "Do not add comments to code")
- Self-documenting names preferred

**TSDoc:**
```typescript
/**
 * Merges class names with Tailwind conflict resolution
 * @param inputs - Class values to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
```

## Function Design

**Size:**
- Most functions under 50 lines
- Large components should be refactored

**Parameters:**
- Destructured props in React components
- Options objects for complex functions
- Default values in destructuring

**Return Values:**
- Explicit returns preferred
- Early return for guard clauses

## Module Design

**Exports:**
- Named exports for utilities and components
- Default export for main block component
- Barrel exports via `index.ts`

**Block Structure (5-file pattern):**
```
block-name/
├── block.json      # Metadata, attributes
├── index.ts        # registerBlockType()
├── edit.tsx        # Editor (imports {BlockName}.tsx)
├── {BlockName}.tsx # Shared React component
└── render.php      # Server render
```

**Barrel Files:**
- `src/components/index.ts` re-exports all components
- `src/lib/utils.ts` exports cn() function

## React Patterns

**State Management:**
```typescript
const [isLoading, setIsLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);
const [data, setData] = useState<Item[]>([]);
```

**Data Fetching:**
```typescript
useEffect(() => {
  const controller = new AbortController();

  fetch(url, {
    headers: { 'X-TypeRocket-Nonce': nonce },
    signal: controller.signal
  })
    .then(r => r.json())
    .then(data => setData(data.data || []))
    .catch(err => {
      if (err.name !== 'AbortError') setError(err.message);
    })
    .finally(() => setIsLoading(false));

  return () => controller.abort();
}, []);
```

## Shadcn Component Patterns

**Using cn() for variants:**
```typescript
import { cn } from '../../lib/utils';

<Button className={cn("w-full", isActive && "bg-primary")} />
```

**Component composition:**
```typescript
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent>
    {/* content */}
  </SheetContent>
</Sheet>
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

---

*Convention analysis: 2026-01-18*
*Update when patterns change*
