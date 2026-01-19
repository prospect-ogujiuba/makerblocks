# Architecture

**Analysis Date:** 2026-01-19

## Pattern Overview

**Overall:** WordPress FSE Blocks Plugin with React Hydration

**Key Characteristics:**
- UI-only plugin (no database queries, business logic in makermaker plugin)
- Server-rendered PHP shells hydrated with React on frontend
- Dual build: blocks (Gutenberg editor) + scripts (frontend hydration)
- Data passed via `component-data` JSON attribute on HTML elements

## Layers

**Block Layer:**
- Purpose: WordPress Gutenberg block definitions
- Location: `src/blocks-dev/`
- Contains: Block metadata, editor UI, server render templates
- Depends on: WordPress Block API, `@wordpress/scripts`

**Component Layer:**
- Purpose: Reusable React UI components (shadcn/ui pattern)
- Location: `src/components/ui/`
- Contains: Button, Badge, Sheet, Dialog, DropdownMenu, Tabs, etc.
- Depends on: Radix UI primitives, class-variance-authority, tailwind-merge

**Scripts Layer:**
- Purpose: Frontend React hydration and SPA apps
- Location: `src/scripts/`
- Contains: MakerBlocks hydration class, MakerStarter SPA
- Depends on: React, react-router-dom, component layer

**PHP Layer:**
- Purpose: WordPress plugin bootstrap, asset loading, block registration
- Location: `inc/`
- Contains: Block registration, enqueue logic, localized data
- Depends on: WordPress core, TypeRocket (for nonces)

**Lib Layer:**
- Purpose: Shared utilities and API helpers
- Location: `src/lib/`
- Contains: `cn()` utility, REST API fetch helpers
- Depends on: clsx, tailwind-merge

## Data Flow

**Block Render Flow:**

1. WordPress calls `render.php` for each block
2. PHP builds `$component_data` array (menu trees, user info, etc.)
3. PHP outputs HTML element with `component-data` JSON attribute
4. `MakerBlocks.tsx` finds element by ID on DOM ready
5. `parseComponentProps()` extracts JSON from `component-data`
6. React component mounted with props via `createRoot()`

**REST API Flow:**

1. React component needs data (in `useEffect`)
2. Calls `fetchApi()` from `src/lib/api.ts`
3. Request goes to `/tr-api/rest/{endpoint}` (TypeRocket)
4. Includes `X-TypeRocket-Nonce` header from `window.siteData.nonce`
5. makermaker plugin handles request, returns JSON
6. Component updates state with response

**State Management:**
- No global state library
- React component local state (`useState`)
- Block attributes managed by WordPress (`setAttributes`)
- Global data via `window.siteData` (PHP to JS bridge)

## Key Abstractions

**MakerBlocks Class:**
- Purpose: Registry-based React component hydration
- Location: `src/scripts/MakerBlocks.tsx`
- Pattern: Singleton with component registry, ID-based mounting

**Block Pattern (5-file structure):**
- Purpose: Standard block implementation
- Files: `block.json`, `index.ts`, `edit.tsx`, `{BlockName}.tsx`, `render.php`
- Pattern: Metadata to Registration to Editor to Component to Server

**UI Components (shadcn pattern):**
- Purpose: Composable, variant-based UI primitives
- Pattern: Radix primitive + cva variants + cn() for class merging

## Entry Points

**Plugin Bootstrap:**
- Location: `makerblocks.php`
- Triggers: WordPress plugin load
- Responsibilities: Define constants, include PHP modules from `inc/`

**Block Registration:**
- Location: `inc/blocks.php`
- Triggers: WordPress `init` hook
- Responsibilities: Register blocks from `blocks/` directory, define categories

**Frontend Scripts:**
- Location: `src/scripts/index.ts`
- Triggers: Script enqueue via `inc/enqueue_assets.php`
- Responsibilities: Instantiate MakerBlocks, trigger component mounting

**Editor Scripts:**
- Location: `src/blocks-dev/*/index.ts`
- Triggers: Block editor load
- Responsibilities: Register block type with edit component

## Error Handling

**Strategy:** Fail silently with console warnings

**Patterns:**
- `try/catch` around JSON parsing in `parseComponentProps()`
- Console warnings for missing components/elements
- API errors thrown as Error with message

## Cross-Cutting Concerns

**Logging:** Console only (warn/error for component failures)

**Validation:**
- `makerblocks_validate_array_structure()` in PHP for block attributes
- TypeScript interfaces for component props

**Authentication:**
- `window.siteData.nonce` for TypeRocket API
- `window.siteData.restNonce` for WP REST API
- `is_user_logged_in()` check controls data exposure
