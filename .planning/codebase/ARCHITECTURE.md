# Architecture

**Analysis Date:** 2026-01-06

## Pattern Overview

**Overall:** WordPress FSE Block Plugin with Client-Side React Hydration

**Key Characteristics:**
- UI-only plugin (no business logic, no database queries)
- Server renders block shells with attributes → Client fetches data via REST API
- 33 custom Gutenberg blocks (all `makerblocks/` prefixed)
- Strict separation: MakerBlocks (UI) ↔ MakerMaker (data via TypeRocket REST)

## Layers

**WordPress Plugin Layer:**
- Purpose: WordPress hooks, asset registration, block registration
- Contains: `makerblocks.php`, `inc/*.php`
- Depends on: WordPress core, Gutenberg
- Used by: WordPress plugin system

**Block Registration Layer:**
- Purpose: Define block metadata, attributes, render callbacks
- Contains: `blocks/*/block.json`, `blocks/*/index.js`, `blocks/*/render.php`
- Depends on: WordPress block API, React
- Used by: Gutenberg editor and frontend

**React Component Layer:**
- Purpose: Editor UI and frontend rendering
- Contains: `src/blocks-dev/*/{BlockName}.jsx`, `src/components/`
- Depends on: React, shared components, REST API
- Used by: Block editor, MakerBlocks hydration class

**Asset Layer:**
- Purpose: Compiled scripts and styles
- Contains: `assets/js/`, `assets/css/`
- Depends on: Build pipeline output
- Used by: Frontend and editor enqueuing

## Data Flow

**Server-Side Rendering (PHP):**
1. Block placed in page via editor
2. `register_block_type()` loads `render.php`
3. `render.php` extracts block attributes from `$attributes`
4. Minimal `component-data` array prepared (static values only)
5. HTML rendered with `get_block_wrapper_attributes()` + JSON data attribute

**Client-Side Hydration (JavaScript):**
1. Page loads, `wp_localize_script` injects `window.siteData`
2. `MakerBlocks.js` initializes on `DOMContentLoaded`
3. For each registered component, find DOM element by ID
4. Parse `component-data` attribute → extract props
5. Create React root, mount component

**Component Data Fetching (React):**
1. Component mounts (e.g., `Services.jsx`)
2. `useEffect` fires with empty deps
3. Fetch from TypeRocket REST API with `X-TypeRocket-Nonce` header
4. Response: `{success: true, data: [...], meta: {...}}`
5. Set state → render UI
6. Loading/error states handled by React (SkeletonLoader)

**State Management:**
- Local state via `useState` hooks per component
- No global state management (Redux, Context)
- Each block instance is independent

## Key Abstractions

**Block Pattern (5-file structure):**
- Purpose: Consistent block organization
- Files: `block.json`, `index.js`, `edit.js`, `{BlockName}.jsx`, `render.php`
- Pattern: All 33 blocks follow identical structure
- Scaffold: `src/blocks-dev/_template/`

**Component Registry:**
- Purpose: Map DOM elements to React components
- Implementation: `src/scripts/MakerBlocks.js` (lines 35-170)
- Pattern: Array of `{id, component, name}` objects
- 27 components registered for hydration

**Shared Components:**
- Purpose: Reusable UI patterns
- Location: `src/components/`
- Examples: Button, Badge variants, IconPicker, SkeletonLoader, SearchBar, FilterPanel
- Export: Barrel pattern via `index.js`

## Entry Points

**Plugin Entry:**
- Location: `makerblocks.php`
- Triggers: WordPress plugin activation
- Responsibilities: Define constants, load `inc/` modules

**Block Registration:**
- Location: `inc/blocks.php:makerblocks_blocks_init()`
- Triggers: `init` hook
- Responsibilities: Register 33 blocks via `register_block_type()`

**Asset Enqueue:**
- Location: `inc/enqueue_assets.php`
- Triggers: `wp_enqueue_scripts`, `enqueue_block_assets`, `admin_enqueue_scripts`
- Responsibilities: Load scripts, styles, Bootstrap Icons

**Frontend Hydration:**
- Location: `src/scripts/MakerBlocks.js:constructor()`
- Triggers: `DOMContentLoaded`
- Responsibilities: Mount React components, register event handlers

## Error Handling

**Strategy:** Try/catch at hydration level, Promise rejection in fetch chains

**Patterns:**
- Component mount wrapped in try/catch - `src/scripts/MakerBlocks.js` (line 220)
- Fetch chains use `.catch()` with error state
- Loading/error states rendered by React components
- Errors logged to console (no server-side reporting)

## Cross-Cutting Concerns

**Logging:**
- Browser console only (`console.log`, `console.error`)
- No structured logging framework
- Debug logs commented out in production

**Validation:**
- Block attributes validated by WordPress via `block.json` schema
- API response format assumed without defensive checks
- Form validation in ContactForm component

**Authentication:**
- TypeRocket nonce via `window.siteData.nonce`
- WP REST nonce via `window.siteData.restNonce`
- Nonces generated server-side via `tr_nonce()`, `wp_create_nonce()`

---

*Architecture analysis: 2026-01-06*
*Update when major patterns change*
