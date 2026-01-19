# Coding Conventions

**Analysis Date:** 2026-01-19

## Naming Patterns

**Files:**
- React components: PascalCase (`Header.tsx`, `MakerBlocks.tsx`)
- Block entry points: lowercase (`index.ts`, `edit.tsx`)
- PHP modules: snake_case (`enqueue_assets.php`, `wp_localize.php`)
- UI components: kebab-case (`button.tsx`, `dropdown-menu.tsx`)

**Functions:**
- TypeScript/React: camelCase (`fetchApi`, `parseComponentProps`)
- PHP: snake_case with plugin prefix (`makerblocks_register_asset`)
- React components: PascalCase (`Edit`, `Header`)

**Variables:**
- TypeScript: camelCase (`sidebarOpen`, `componentRegistry`)
- PHP: snake_case (`$site_info`, `$current_user`)
- Constants (PHP): SCREAMING_SNAKE_CASE (`MAKERBLOCKS_PLUGIN_DIR`)

**Types/Interfaces:**
- PascalCase (`NavItem`, `ComponentConfig`, `ApiResponse`)

## Code Style

**Formatting:**
- Tool: wp-scripts format (Prettier)
- Indentation: Tabs (per `.editorconfig`)
- Line endings: LF
- Final newline: Yes

**Linting:**
- Commands: `npm run lint:js`, `npm run lint:css`

**TypeScript:**
- Strict mode enabled
- Path alias: `@/*` maps to `./src/*`

## Import Organization

**Order:**
1. React/external framework (`react`, `react-dom/client`)
2. WordPress packages (`@wordpress/blocks`, `@wordpress/i18n`)
3. Third-party libraries (`@heroicons/react`, `clsx`)
4. Internal absolute imports (`@/components/ui`)
5. Relative imports (`./edit`)

## Error Handling

**API Layer:**
- Check `response.ok`, throw Error with message

**Component Mounting:**
- Try/catch around `createRoot`, log to console

## React Patterns

**Component Structure:**
1. Imports
2. Types/Interfaces
3. Constants
4. Component (state, effects, handlers, JSX)

**forwardRef Pattern:** Used for UI components with `displayName`

**CVA Pattern:** class-variance-authority for style variants

## Block Patterns

**5-File Pattern:**
1. `block.json` - Metadata (SINGLE SOURCE OF TRUTH)
2. `index.ts` - Registration
3. `edit.tsx` - Editor component
4. `{BlockName}.tsx` - Frontend React
5. `render.php` - Server render with `component-data`

## PHP Patterns

**Function Existence Check:** `if (!function_exists(...))`

**WordPress Hooks:** `add_action`, `add_filter`

**Security:** `esc_attr()`, `wp_json_encode()`, ABSPATH check

## Tailwind/CSS Patterns

**Class Merging:** `cn()` from `@/lib/utils`

**Sass 7-1:** abstracts, base, components, layout, pages, vendors
