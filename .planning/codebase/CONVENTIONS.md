# Coding Conventions

**Analysis Date:** 2026-01-18

## Naming Patterns

**Files:**
- React components: PascalCase (`Header.tsx`, `MakerBlocks.tsx`, `DashboardLayout.tsx`)
- Utilities/lib: kebab-case (`api.ts`, `utils.ts`, `setup.ts`)
- UI components: kebab-case (`button.tsx`, `dropdown-menu.tsx`)
- PHP: snake_case (`enqueue_assets.php`, `wp_localize.php`)

**Functions:**
- TypeScript: camelCase (`fetchApi`, `parseComponentProps`, `mountComponent`)
- PHP: snake_case with prefix (`makerblocks_get_custom_blocks`, `makerblocks_blocks_init`)
- React hooks: `use*` prefix (`useState`, `useEffect`, `useLocation`)

**Variables:**
- TypeScript: camelCase (`sidebarOpen`, `componentRegistry`)
- Constants: UPPER_SNAKE_CASE (`MAKERBLOCKS_PLUGIN_DIR`)
- Private members: underscore prefix (`private _initializeComponents`)

**Types:**
- Interfaces: PascalCase, no I prefix (`SiteData`, `ComponentConfig`, `BlockEditProps`)
- Type aliases: PascalCase (`NavItem`, `ApiResponse`)
- Props: `${ComponentName}Props` pattern

## Code Style

**Formatting:**
- Indentation: 2 spaces (TS/JS), Tabs (PHP per WordPress)
- Quotes: Single quotes preferred (`'clsx'`, `'react'`)
- Semicolons: Omitted in most TSX (`"use client"` pattern)
- Trailing commas: Yes

**Linting:**
- wp-scripts lint-js (ESLint under hood)
- wp-scripts lint-style (stylelint)
- Run: `npm run lint:js`, `npm run lint:css`

## Import Organization

**Order:**
1. External packages (`react`, `@heroicons/react`)
2. WordPress packages (`@wordpress/i18n`, `@wordpress/block-editor`)
3. Internal modules (`@/lib/utils`, `@/components/ui`)
4. Relative imports (`./components`, `../layouts`)
5. Type imports (`import type { ... }`)

**Grouping:**
- Blank line between groups
- React imports first within external

**Path Aliases:**
- `@/*` → `src/*` (defined in `tsconfig.json`)

## Error Handling

**Patterns:**
- try/catch around JSON.parse (`MakerBlocks.tsx:35`)
- Console.warn for recoverable issues
- Console.error for critical failures
- No error boundaries (gap)

**Error Types:**
- Throw on invalid input (not currently used)
- Log and continue for hydration failures
- Silent fail for missing mount points

## Logging

**Framework:**
- Browser console (console.log, warn, error)
- No structured logging

**Patterns:**
- `console.warn()` for mount issues
- `console.error()` for parse failures
- Debug logs removed in production (assumed)

## Comments

**When to Comment:**
- JSDoc blocks for public functions
- Inline comments for non-obvious logic
- Section markers (`// WordPress dependencies`)

**JSDoc/TSDoc:**
- Used in block edit files (`@see`, `@return`)
- Type documentation in `.d.ts` files
- Example from `wordpress.d.ts`:
```ts
/**
 * Extended BlockEditProps with common patterns
 */
export interface BlockEditProps<T> { ... }
```

**PHP DocBlocks:**
- `@package makerblocks` on all files
- Function descriptions above definitions

## Function Design

**Size:**
- Target: Under 50 lines
- Large components exist (Settings.tsx: 481 lines - needs refactor)

**Parameters:**
- Destructure props in React components
- Options object for 4+ parameters

**Return Values:**
- Explicit returns
- JSX.Element for components
- Promise<T> for async

## Module Design

**Exports:**
- Named exports for utilities (`export function cn`)
- Default exports for React components (`export default function Edit`)
- Re-exports from index not used (direct imports)

**Barrel Files:**
- Not used (import directly from component files)

## React Patterns

**Component Structure:**
```tsx
"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface Props { ... }

export function Component({ prop1, prop2 }: Props) {
  const [state, setState] = useState()

  return (
    <div className={cn("base-class", conditional && "extra")}>
      ...
    </div>
  )
}
```

**Styling:**
- Tailwind classes inline
- `cn()` for conditional classes
- CVA for component variants

**State:**
- useState for local state
- No global state management
- Props for data down

## PHP Patterns

**Hook Registration:**
```php
add_action('init', 'makerblocks_blocks_init');
add_action('wp_enqueue_scripts', 'makerblocks_enqueue_frontend');
```

**Function Naming:**
```php
function makerblocks_{action}_{subject}() { ... }
```

---

*Convention analysis: 2026-01-18*
*Update when patterns change*
