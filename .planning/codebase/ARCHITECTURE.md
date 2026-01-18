# Architecture

**Analysis Date:** 2026-01-18

## Pattern Overview

**Overall:** Layered Plugin Architecture with React Hydration

**Key Characteristics:**
- WordPress FSE block plugin (UI-only)
- React hydration on frontend
- All data via TypeRocket REST API
- Strict separation: UI in makerblocks, logic in makermaker

## Layers

**Plugin Core:**
- Purpose: Bootstrap and register WordPress hooks
- Contains: Constants, includes loader
- Location: `makerblocks.php`
- Depends on: WordPress core
- Used by: All PHP modules

**PHP Presentation Layer:**
- Purpose: Block registration, asset loading, data injection
- Contains: `inc/blocks.php`, `inc/enqueue_assets.php`, `inc/wp_localize.php`
- Depends on: WordPress hooks, plugin core
- Used by: Gutenberg editor, frontend

**Block Render Layer:**
- Purpose: Server-side HTML output with React mount points
- Contains: `src/blocks-dev/*/render.php`
- Depends on: Block attributes, PHP helpers
- Used by: WordPress render pipeline

**React Hydration Layer:**
- Purpose: Mount React components on page load
- Contains: `src/scripts/MakerBlocks.tsx`, `src/scripts/index.ts`
- Depends on: DOM, component registry
- Used by: Frontend pages

**React Application Layer:**
- Purpose: SPA routing and page components
- Contains: `src/scripts/apps/makerstarter/` (pages, layouts)
- Depends on: React Router, UI components
- Used by: App block

**UI Component Layer:**
- Purpose: Reusable primitives
- Contains: `src/components/ui/` (10 ShadCN components)
- Depends on: Radix UI, CVA, Tailwind
- Used by: All React components

**Utility Layer:**
- Purpose: Shared helpers
- Contains: `src/lib/api.ts`, `src/lib/utils.ts`
- Depends on: `window.siteData`
- Used by: Components needing data/styles

## Data Flow

**Block Render → React Hydration:**

1. WordPress renders block via `render.php`
2. Block outputs `<div id="makerblocks-app" data-component-data="{...}">`
3. `index.ts` instantiates `MakerBlocks` class on DOMContentLoaded
4. `MakerBlocks` finds mount point by ID
5. Parses `component-data` JSON attribute
6. Calls `createRoot().render(<Component {...props} />)`

**API Request Lifecycle:**

1. Component calls `api.get('/endpoint')`
2. `fetchApi()` reads `window.siteData.{siteUrl, nonce}`
3. Fetch to `${siteUrl}/tr-api/rest/${endpoint}` with nonce header
4. Response parsed as `TypeRocketResponse<T>`
5. Component updates state with data

**State Management:**
- Component-local state (useState)
- No global state management
- `window.siteData` for site context

## Key Abstractions

**Block (5-file pattern):**
- Purpose: Gutenberg block definition
- Examples: `src/blocks-dev/app/`, `src/blocks-dev/header/`
- Pattern: block.json, index.js, edit.js, Component.tsx, render.php

**ComponentRegistry:**
- Purpose: Map block IDs to React components
- Location: `src/scripts/MakerBlocks.tsx`
- Pattern: `{ id: string, component: ReactComponent, name: string }[]`

**UI Component (ShadCN):**
- Purpose: Styled Radix primitive
- Examples: `Button`, `Card`, `Dialog`
- Pattern: CVA variants + forwardRef + asChild

**API Client:**
- Purpose: Typed REST operations
- Location: `src/lib/api.ts`
- Pattern: `fetchApi<T>`, `get<T>`, `post<T>`, `put<T>`, `del<T>`

## Entry Points

**Plugin Init:**
- Location: `makerblocks.php`
- Triggers: Plugin activation
- Responsibilities: Define constants, load includes

**Frontend Scripts:**
- Location: `src/scripts/index.ts` → `MakerBlocks.tsx`
- Triggers: DOMContentLoaded
- Responsibilities: Find mount points, hydrate React

**Block Editor:**
- Location: `src/blocks-dev/*/index.js`
- Triggers: Gutenberg loads
- Responsibilities: Register block type

**SPA App:**
- Location: `src/scripts/apps/makerstarter/MakerStarter.tsx`
- Triggers: App block renders
- Responsibilities: React Router setup, page rendering

## Error Handling

**Strategy:** Catch at boundaries, log to console

**Patterns:**
- `MakerBlocks.tsx:35` - try/catch around JSON.parse for props
- Console.warn/error for mount failures
- No error boundaries in components

## Cross-Cutting Concerns

**Logging:**
- Console.warn/error for hydration issues
- No structured logging

**Validation:**
- TypeScript types at compile time
- No runtime validation on API responses
- Nonce verification server-side (TypeRocket)

**Authentication:**
- Nonce-based verification
- User data passed via `window.siteData` when logged in

---

*Architecture analysis: 2026-01-18*
*Update when major patterns change*
